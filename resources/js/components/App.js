import React , { useReducer } from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import loadable from '@loadable/component';

// Import Components
import Header from './Layouts/Header';

// impor Contexts
import TodosContext from './../Context/todos';

// import Reducers
import AppReducer from './../Reducers/appReducer';


import AsyncComponent from './../AsyncComponent';

// imports Routes

const Home = loadable(() => import('../Routes/Home'))
const About = loadable(() => import('../Routes/About'))
const Todo = loadable(() => import('../Routes/Todo'))
const Contact = loadable(() => import('../Routes/Contact'))
const NotFound = loadable(() => import('../Routes/NotFound'))


function App() {

    const [state , dispatch] = useReducer(AppReducer , {
        todos : [],
    })

    return (
        <BrowserRouter>
            <TodosContext.Provider value={{
                todos: state.todos,
                dispatch
            }}>
                <div className="App">
                    <Header />
                    <main>
                        <Switch>
                            <Route path="/home" exact component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/todos/:todo" component={Todo}/>
                            <Route path="/404" component={NotFound} />
                            <Route component={NotFound} />
                        </Switch>
                    </main>
                </div>
            </TodosContext.Provider>
        </BrowserRouter>
    )
}

export default App;
