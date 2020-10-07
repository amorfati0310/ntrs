import React from 'react';
import styled from '@emotion/styled';
import Maybe from 'components/Maybe';
import { useDispatch } from 'react-redux';
import { setPage } from 'features/pagninate/paginateSlice';

interface PaginateProps {
    pageCount: number;
}

function Paginate({ pageCount }: PaginateProps): JSX.Element {
    const dispatch = useDispatch();

    const handlePageButtonClick = React.useCallback(
        (selectedPage: number) => {
            // e.preventDefault();
            dispatch(setPage(selectedPage));
        },
        []
    );

    const hasPaginate = pageCount > 1;
    return (
        <Maybe test={hasPaginate}>
            <PaginateBlock>
                {[...new Array(pageCount)].map((_, num) =>
                    <button
                        onClick={() => handlePageButtonClick(num + 1)}
                        key={`paginate-button-${num + 1}`}
                    >
                        {num + 1}
                    </button>
                )}
            </PaginateBlock>
        </Maybe>
    );
}

const PaginateBlock = styled.div`
  
`;

export default Paginate;
