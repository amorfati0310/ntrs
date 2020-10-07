import React from 'react';
import styled from '@emotion/styled';

interface TodoProps {
    title: string;
}

const TitleBlock = styled.h1`
    font-weight: 100;
    font-size: 96px;
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
`;


function TodoTitle({ title }: TodoProps): JSX.Element {
    return (
        <TitleBlock>{title}</TitleBlock>
    );
}

export default TodoTitle;