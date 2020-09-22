import * as React from 'react';
import Header from './index';


export default {
    title: 'Header',
    copmonents: Header,
};


export const NormalHeader = () => {
    return (
        <>
            <Header title="conduit" />
        </>
    );
};