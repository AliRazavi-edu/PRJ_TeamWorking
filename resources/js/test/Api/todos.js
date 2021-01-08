import axios from 'axios';


const instance = axios.create({
    baseURL : 'https://react-course-d7c8c.firebaseio.com',
    timeout : 5000
});


instance.interceptors.request.use(function(config) {
    console.log(config);
    return config;
} , function(err) {
    // handle error
    return Promise.reject(err)
})

instance.interceptors.response.use(function(response) {
    return response;
},function(err) {
    // System log

    return Promise.reject(err);
})


export default instance;