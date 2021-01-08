import React from 'react';

const authContext = React.createContext({
    authenticated : false,
    login : () => {},
    logout : () => {},
})

export default authContext;