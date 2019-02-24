module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://public-api.tracker.gg/apex/v1/standard/profile', // '/api': {}, 就是告诉node, 我接口只要是'/api'开头的才用代理.所以你的接口就要这么写 /api/xx/xx. 最后代理的路径就是 http://xxx.xx.com/api/xx/xx.
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '' // 可是不对啊, 我正确的接口路径里面没有/api啊. 所以就需要 pathRewrite,用''^/api'':'', 把'/api'去掉, 这样既能有正确标识, 又能在请求接口的时候去掉api.
                }
            },
        }
    }
}