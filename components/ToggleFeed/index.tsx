import React from 'react';
import styled from '@emotion/styled';
import Maybe from 'components/Maybe';

function ToggleFeed(): JSX.Element {
    return (
        <ToggleFeedBlock>
            <Maybe test={false}>
                <button>Your Feed</button>
            </Maybe>
            <button>Global Feed</button>
        </ToggleFeedBlock>
    );
}

const ToggleFeedBlock = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
`;

export default ToggleFeed;