const instance = window.axios

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
