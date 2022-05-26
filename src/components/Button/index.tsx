import React from 'react';

// -------------------------------------

type TProps = {
    children?: React.ReactNode;
}

// -------------------------------------

export default function Button({ children }: TProps) {
    return (
        <button>{children}</button>
    );
}
