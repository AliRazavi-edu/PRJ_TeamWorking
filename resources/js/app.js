import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import Axios from "axios";

window.laravel.csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
window.laravel.user = JSON.parse(window.laravel.user);

window.axios = Axios;
window.axios.defaults.baseURL = window.laravel.env.baseUrl+'/api/v1';
window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization' : 'Bearer '+ window.laravel.user.api_token,
    'Accept' : 'application/json'
};

ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
