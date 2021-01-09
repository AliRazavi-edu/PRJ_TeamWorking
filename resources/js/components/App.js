import React, {useReducer} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import '../../../public/assets/css/fonts.css';

import loadable from '@loadable/component';

// Import Components
import Header from './Layouts/Header';

// imports Routes
const Home = loadable(() => import('../Routes/Home'))
const Admin = loadable(() => import('../Routes/Admin'))
const User = loadable(() => import('../Routes/Admin/User'))
const Teacher = loadable(() => import('../Routes/Admin/Teacher'))
const StudyField = loadable(() => import('../Routes/Admin/StudyField'))
const Lesson = loadable(() => import('../Routes/Admin/Lesson'))
const NotFound = loadable(() => import('../Routes/NotFound'))


function App() {

    let renderAdminRoutes = function () {
        if(laravel.user.role != 'admin'){
            return null;
        }

        return (
            <>
                <Route path="/admin" exact component={Admin}/>
                <Route path="/admin/user" exact component={User}/>
                <Route path="/admin/teacher" component={Teacher}/>
                <Route path="/admin/field" component={StudyField}/>
                <Route path="/admin/lesson" exact component={Lesson}/>
                <Route path="/admin/lesson/:lesson" component={Lesson}/>
            </>
        );
    }
    return (
        <BrowserRouter>
                <div className="App">
                    <Header/>
                    <div className="container rtl">
                        <main>
                            <Switch>

                                <Route path="/home" exact component={Home}/>
                                {/*<Route path="/todos/:todo" component={Todo}/>*/}

                                {renderAdminRoutes()}

                                <Route path="/404" component={NotFound}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </main>
                    </div>
                </div>
        </BrowserRouter>
    )
}

export default App;
