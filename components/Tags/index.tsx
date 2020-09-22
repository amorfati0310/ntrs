import React from 'react';
import styled from '@emotion/styled';

interface TagsProps {
    tags: Array<string>;
}

function Tags({ tags }: TagsProps): JSX.Element {

    return (
        <TagsBlock>
            {tags.map(tag => (<span key={tag}>{tag}</span>))}
        </TagsBlock>
    );
}

export default Tags;

const TagsBlock = styled.div`
    width: 200px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px 10px 10px;
    background: #f3f3f3;
    border-radius: 4px;
`;

