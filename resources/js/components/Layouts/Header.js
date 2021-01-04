import React , { useContext } from 'react';
import TodosContext from '../../Context/todos';

import { NavLink } from 'react-router-dom';

function Header() {

    const todosContext = useContext(TodosContext);

    return (
        <header>
            <div className="navbar navbar-dark navbar-expand-md bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong>Todo App</strong>
                    </a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/home" activeStyle={{
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
                </div>
            </div>
        </header>
    )
}


export default Header;
