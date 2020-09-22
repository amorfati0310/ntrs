import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const StyledLink = styled.a`
    display: flex;
    align-items: center;
    padding: 10px;
`;

interface NLinkProps {
    href: string;
    name: string
}

function NLink({ href, name }: NLinkProps): JSX.Element {
    return (
        <Link prefetch href={href} passHref>
            <StyledLink>{name}</StyledLink>
        </Link>);
}
export default NLink;