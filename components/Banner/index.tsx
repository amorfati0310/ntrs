import React from 'react';
import styled from '@emotion/styled';



function Banner(): JSX.Element {

    return (
        <BannerBlock>
            <Title>conduit</Title>
            <SubTitle>A place to share your knowledge.</SubTitle>
        </BannerBlock>
    );
}

export default Banner;


const BannerBlock = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #5CB85C;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
    
`;

const Title = styled.h1`
text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
font-weight: 700;
text-align: center;
font-size: 3.5rem;
margin: 1rem auto;
padding-bottom: 0.5rem;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`;

const SubTitle = styled.h2`
font-size: 1.5rem;
font-weight: 300;
margin-bottom: 0px;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`;
