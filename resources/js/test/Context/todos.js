import React from 'react';

const todosContext = React.createContext({
    todos : [],
    add : () => {},
    edit : () => {},
    done : () => {},
    delete : () => {}
})

export default todosContext;