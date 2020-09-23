import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsResult } from 'next';
import Head from "next/head";
import styled from '@emotion/styled';
import { ParsedUrlQuery } from 'querystring';

import Header from 'components/Header';
import Banner from 'components/Banner';
import Tags from 'components/Tags';
import React from 'react';


type Author = {
    bio: null;
    following: boolean;
    image: string;
    username: string;
}

type Article = {
    author: Author;
    body: string;
    createdAt: string;
    description: string;
    favorited: boolean;
    favoritesCount: number;
    slug: string;
    tagList: Array<string>
    title: string;
    updatedAt: string;
}

type serverTagsType = { tags: Array<string> };

type serverTagsArticles = {
    tags: Array<Article>, articlesCount: number;
};

export const getServerSideProps: GetServerSideProps<serverTagsType, ParsedUrlQuery> = async (context): Promise<GetServerSidePropsResult<serverTagsType>> => {
    // This gets called on every request
    // const tagRes = await fetch('https://conduit.productionready.io/api/tags');
    // const tags: serverTagsType = await tagRes.json();

    // const articleRes = await fetch('https://conduit.productionready.io/api/articles');
    // const articles: serverTagsType = await articleRes.json();


    // // Pass data to the page via props
    return {
        props: {
            tags,
            articles,
        }
    };
};

const MainBlock = styled.main`
  margin: 0 auto;
  width: 1170px;
  display: flex;
  justify-content: space-between;
`;

function HomePage({ data: { tags } }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
    // will resolve posts to type Data
    // const tags = data.tag.filter(v => v);
    console.log(tags);
    // Render data...
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
                    <section>Cards</section>
                    <Tags tags={tags} />
                </MainBlock>
            </div>
        </>
    );
}

export default HomePage;
