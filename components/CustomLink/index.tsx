import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

interface CustomLinkProps {
    href: string;
    as: string;
    onClick?: () => void;
    children: React.ReactNode;
    isActive: boolean;
}

const Anchor = styled('a') <{ isActive: boolean }>`
  text-decoration: none;
  padding: 10px;
  color: ${props => props.isActive ? '#5cb85c' : 'rgba(0, 0, 0, 0.3)'};
  &:hover {
      color: rgba(0,0,0,0.8);
  }
`;

const CustomLink = ({
    href,
    as,
    children,
    isActive
}: CustomLinkProps) => (
        <Link href={href} as={as} passHref >
            <Anchor isActive={isActive}>{children}</Anchor>
        </Link>
    );

export default CustomLink;