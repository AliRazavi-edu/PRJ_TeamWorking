import React from 'react';

const LoadingContext = React.createContext({
    active : false,
    loading : () => {},
})

export default LoadingContext;
