import React from 'react';
import { ReactChildren } from 'react';

interface MaybeProps {
    test: boolean;
    children: ReactChildren;
}

function Maybe({ test, children }: MaybeProps): JSX.Element | null {
    if (!test) {
        return null;
    }
    return (
        <>
            {children}
        </>
    );
}

export default Maybe;