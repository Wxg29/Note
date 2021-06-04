//vue脚手架的配置文件  *修改了配置文件要重启服务才生效*

// 关闭 eslint
module.exports = {
    lintOnSave: false,  //关闭eslint检查
    devServer: {
        host: "localhost",
        port: "8080",
        open: true, //启动服务 自动打开浏览器
        inline: true,
        // proxy: {    //反向代理
        //     "/api": {}
        // }
    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {   // css 代码转化
                plugins: [  // 插件
                    require("postcss-px2rem-exclude")({
                        // 3. 淘宝适配  1rem = 10vw 
                        // remUnit: 37.5,   // 自动除以 100 
                        remUnit: 100     // 网易适配 
                    })
                ]
            }
        }
    }
}
// module.exports = {
//     devServer: {
//         overlay: {
//             warnings: false,
//             errors: false
//         }
//     },
//     lintOnSave: false,//直接关闭eslint检查
//     configureWebpack: {  //配置路径别名
//         resolve: {
//             alias: {
//                 'assets': '@/assets',
//                 'com': '@/components',
//                 'views': '@/views',
//             }
//         }
//     }
// }