(function(Vue,axios){
    // 配置axios
    const Axios = axios.create({
        baseURL: 'https://apimusic.linweiqin.com/',
        timeout: 10000,
        // 设置请求头，需要设置接口允许的请求头
        // header:{
        //     'Content-Type': 'appLicaation/json'
        // }
    })
    // 暴露axios设置
    window.Axios = Axios

    // Add a request interceptor
    // 添加请求拦截器
    Axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        // 每次请求的时候可以对配置 config 进行相关设置
        // console.log(config)
        // 此处添加的信息记录在请求中
        // config.params["token"] = "web20200726"
        // config.params["key"] = "web0726"
        return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
    });

    // Add a response interceptor
    // 返回的拦截器
    Axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        // 返回数据中的 data 部分
        return response.data;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });
})(Vue,axios)