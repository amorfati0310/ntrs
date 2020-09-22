import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsResult } from 'next';
import styled from '@emotion/styled';
import { ParsedUrlQuery } from 'querystring';

import Header from 'components/Header';
import Banner from 'components/Banner';



type serverTagsType = { tags: string[] };

export const getServerSideProps: GetServerSideProps<serverTagsType, ParsedUrlQuery> = async (context): Promise<GetServerSidePropsResult<serverTagsType>> => {
    // This gets called on every request
    const res = await fetch('https://conduit.productionready.io/api/tags');
    const data: serverTagsType = await res.json();
    // // Pass data to the page via props
    return {
        props: {
            data,
        }
    };
};

const MainBlock = styled.main`
  margin: 0 auto;
  width: 600px;
  align-items: center;
`;

function HomePage({ data: { tags } }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
    // will resolve posts to type Data
    // const tags = data.tag.filter(v => v);
    console.log(tags);
    // Render data...
    return (
        <div>
            <Header title="conduit" />
            <Banner />
            {tags.map(tag => (<span key={tag}>{tag}</span>))}
        </div>
    );
}

export default HomePage;
