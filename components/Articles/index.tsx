import React from 'react';
import styled from '@emotion/styled';
import Article from '../Article';

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

interface ArticlesProps {
    articles: Array<Article>;
}

function Articles({ articles }: ArticlesProps) {
    return (
        <ArticlesBlock>
            {articles.map((article, index) => (
                <Article
                    article={article}
                    key={index}
                />
            ))}
        </ArticlesBlock>
    );
}

const ArticlesBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Articles;
