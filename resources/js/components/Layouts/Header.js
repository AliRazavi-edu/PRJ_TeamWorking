import React , { useContext } from 'react';

import { NavLink } from 'react-router-dom';

function Header() {

    return (

        <header>
            <div className="navbar navbar-dark navbar-expand-md bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/home">خانه</NavLink>
                        </li>
                        {
                            laravel.user.role == 'admin'
                            ? (<li className="nav-item">
                            <NavLink className="nav-link" to="/admin">مدیریت</NavLink>
                            </li>)
                            : null
                        }

                    </ul>
                    <a href="/" className="navbar-brand d-flex align-items-center">
                        <strong>{laravel.env.name}</strong>
                    </a>
                </div>
            </div>
        </header>
    )
}


export default Header;
