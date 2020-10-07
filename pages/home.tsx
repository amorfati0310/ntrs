import React from 'react';
import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';
import { ParsedUrlQuery } from 'querystring';

import Header from 'components/Header';
import Banner from 'components/Banner';
import Tags from 'components/Tags';
import Articles from 'components/Articles';
import Paginate from 'components/Paginate';
import ToggleFeed from 'components/ToggleFeed';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';



type Author = {
    bio: null;
    following: boolean;
    image: string;
    username: string;
};

type Article = {
    author: Author;
    body: string;
    createdAt: string;
    description: string;
    favorited: boolean;
    favoritesCount: number;
    slug: string;
    tagList: Array<string>;
    title: string;
    updatedAt: string;
};



type serverResponseType = {
    tags: Array<string>;
    articles: Array<Article>;
    articlesCount: number;
};

export const getServerSideProps: GetServerSideProps<serverResponseType, ParsedUrlQuery> = async (context): Promise<GetServerSidePropsResult<serverResponseType>> => {
    // This gets called on every request
    const { offset = 0 } = context.query;
    const tagRes = await fetch('https://conduit.productionready.io/api/tags');
    const { tags }: Pick<serverResponseType, 'tags'> = await tagRes.json();

    const articleRes = await fetch(`https://conduit.productionready.io/api/articles?offset=${offset}`);
    const { articles, articlesCount }: Pick<serverResponseType, 'articles' | 'articlesCount'> = await articleRes.json();


    // // Pass data to the page via props
    return {
        props: {
            tags,
            articles,
            articlesCount,
        }
    };
};

const MainBlock = styled.main`
  margin: 0 auto;
  width: 1170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentsBlock = styled.div`
    margin: 0 auto;
    display: flex;
`;

function HomePage({ tags, articles, articlesCount }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
    // will resolve posts to type Data
    // const tags = data.tag.filter(v => v);
    console.log(tags, articles, articlesCount);
    // Render data...
    const articlesPerPage = 20;
    const pageCount = Math.ceil(articlesCount / articlesPerPage);

    const router = useRouter();

    const [isLoading, setLoading] = useState(false);
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    useEffect(() => {
        router.events.on('routeChangeStart', startLoading);
        router.events.on('routeChangeComplete', stopLoading);

        return () => {
            router.events.off('routeChangeStart', startLoading);
            router.events.off('routeChangeComplete', stopLoading);
        };
    }, []);

    const pagginationHandler = (page: number) => {
        const currentPath = router.pathname;
        const currentQuery = router.query;
        currentQuery.page = `${page}`;
        currentQuery.offset = `${(page - 1) * 20}`;
        router.push({
            pathname: currentPath,
            query: currentQuery,
        });

    };


    return (
        <>
            <Head>
                <title>HOME | NEXT REALWORLD</title>
                <meta
                    name="description"
                    content="Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
                />
            </Head>
            <div>
                <Header title="conduit" />
                <Banner />
                <MainBlock>
                    <ToggleFeed />
                    <ContentsBlock>
                        <Articles articles={articles} />
                        <Tags tags={tags} />
                    </ContentsBlock>
                    <Paginate
                        pageCount={pageCount}
                        pagginationHandler={pagginationHandler}
                    />
                </MainBlock>
            </div>
        </>
    );
}

export default HomePage;
