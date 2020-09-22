import React from 'react';
import NLink from '../Link';
import styled from '@emotion/styled';

interface HeaderProps {
    title: string;
}

function Header({ title }: HeaderProps): JSX.Element {

    return (
        <HeaderBlock>
            <Title>{title}</Title>
            <NavBlock>
                <NLink href='/home' name='Home' />
                <NLink href='/signin' name='signin' />
                <NLink href='/signup' name='signup' />
            </NavBlock>
        </HeaderBlock>
    );
}

export default Header;

const Title = styled.h2`
    font-family: "Titillium Web", sans-serif;
    font-size: 1.5rem;
    padding-top: 0rem;
    margin-right: 2rem;
    color: #5CB85C;
`;

const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 1170px;
  background-color: #fff;
`;



const NavBlock = styled.nav`
  display: flex;
  align-items: center;
`;
