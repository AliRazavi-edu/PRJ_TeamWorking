import React , { useContext } from 'react';
import AuthContext from '../../Context/auth';
import TodosContext from '../../Context/todos';

import { NavLink } from 'react-router-dom';

function Header() {

    const todosContext = useContext(TodosContext);
    const authContext = useContext(AuthContext);


    let doLogin = () => authContext.dispatch({ type : 'login_user' });
    let doLogout = () => authContext.dispatch({ type : 'logout_user'});

    return (
        <header>
            <div className="navbar navbar-dark navbar-expand-md bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong>Todo App</strong>
                    </a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/" activeStyle={{
                                color : 'red'
                            }}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul> 
                    {
                        ! authContext.authenticated
                            ? <button className="btn btn-sm btn-success" onClick={doLogin}>login</button>
                            : <button className="btn btn-sm btn-danger" onClick={doLogout}>logout</button>
                    }
                </div>
            </div>
        </header>
    )
}


export default Header;