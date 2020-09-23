import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import NLink from 'components/Link';

// TODO type 들 따로 빼기 
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

interface ArticleProps {
    article: Article;
}

function Article({ article }: ArticleProps): JSX.Element {
    return (
        <ArticleBlock>
            {/* infoBox */}
            <InfoBlock>
                <div>
                    <img
                        width="20"
                        src={article.author.image}
                        alt="author"
                    />
                    <div>
                        <span>{article.author.username}</span>
                        <span>{article.createdAt}</span>
                    </div>
                </div>
                <button>{article.favoritesCount}</button>
            </InfoBlock>
            <div>
                <h1>title: {article.title}</h1>
                <p>description: {article.description}</p>
            </div>
            <NLink href={`article/${article.slug}`} name="Read More" />
        </ArticleBlock>
    );
}

const InfoBlock = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ArticleBlock = styled.article`
  
`;

export default Article;
