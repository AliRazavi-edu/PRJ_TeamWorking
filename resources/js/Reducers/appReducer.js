function AppReducer(state , action) {
    console.log(state , action);
    switch (action.type) {
        case 'init_todo':
            let { todos } = action.payload;
            return  {
                ...state,
                todos
            }
        case 'add_todo':
            return addTodo(state , action);
        case 'delete_todo' :
            return deleteTodo(state,action);
        case 'toggle_todo' :
            return toggleTodo(state, action);
        case 'edit_todo' :
            return editTodo(state , action);
        default:
            return state;
    }
}

export default AppReducer;


let addTodo = (state , action) => {
    let { todo } = action.payload;
    return {
        ...state,
        todos : [
            ...state.todos,
            todo
        ]
    }
}

let deleteTodo = (state , action ) => {
    let { key } = action.payload;

    return {
        ...state,
        todos : state.todos.filter(item => item.key !== key)
    }
}

let toggleTodo = (state , action) => {
    let { key } = action.payload;

    let item = state.todos.find(item => item.key === key);
    item.done = ! item.done ;

    let newTodos = state.todos.filter(item => item.key !== key)

    return {
        ...state,
        todos : [
            ...newTodos,
            item
        ]
    }
}

let editTodo = (state ,action) => {
    let { key , text} = action.payload;

    let item = state.todos.find(item => item.key === key);
    item.text = text ;

    let newTodos = state.todos.filter(item => item.key !== key)

    return {
        ...state,
        todos : [
            ...newTodos,
            item
        ]
    }
}
