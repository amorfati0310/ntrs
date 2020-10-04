import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';


const StyledLink = styled.a<NLinkStyleProps>`
    display: flex;
    align-items: center;
    padding: 10px;
    color: ${props => props.isActive ? '#5cb85c' : 'rgba(0, 0, 0, 0.3)'};
    &:hover {
        color: rgba(0,0,0,0.8);
    }
`;

interface NLinkStyleProps {
    readonly isActive: boolean;
};

interface NLinkProps {
    href: string;
    name: string;
}

function NLink({ href, name }: NLinkProps): JSX.Element {
    const router = useRouter();
    const isActive = router.pathname === href;
    return (
        <Link prefetch href={href} passHref>
            <StyledLink isActive={isActive}>{name}</StyledLink>
        </Link>);
}
export default NLink;