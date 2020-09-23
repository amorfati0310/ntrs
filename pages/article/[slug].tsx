import React from 'react';
import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';
import { ParsedUrlQuery } from 'querystring';

import Tags from 'components/Tags';
import Articles from 'components/Articles';

import Header from 'components/Header';
import Banner from 'components/Banner';

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



type serverResponseType = {
  tags: Array<string>;
  articles: Array<Article>;
  articlesCount: number;
};

export const getServerSideProps: GetServerSideProps<serverResponseType, ParsedUrlQuery> = async (context): Promise<GetServerSidePropsResult<serverResponseType>> => {
  // This gets called on every request
  const tagRes = await fetch('https://conduit.productionready.io/api/tags');
  const { tags }: Pick<serverResponseType, 'tags'> = await tagRes.json();

  const articleRes = await fetch('https://conduit.productionready.io/api/articles');
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
  justify-content: space-between;
`;

function ArticleDetailPage({ tags, articles, articlesCount }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  // will resolve posts to type Data
  // const tags = data.tag.filter(v => v);
  console.log(tags, articles, articlesCount);
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
        <Banner bg="#000" />
        <MainBlock>
          <Articles articles={articles} />
          <Tags tags={tags} />
        </MainBlock>
      </div>
    </>
  );
}

export default ArticleDetailPage;
