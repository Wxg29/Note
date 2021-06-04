<!-- # vue-app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/). -->


#   项目的笔记文件

##  关闭eslint的警告
-   新建脚手架配置文件vue.config.js
-   *修改了配置文件要重启服务才生效*

##  文件解释
-   components 单文件组件,需要被注册
-   view 路由组件
-   router 路由文件

## component组件
-   scoped 组件的单页面样式<style lang="scss" scoped></style>

## 脚手架路由配置
-   路由懒加载 ``` component: () => import('../views/About.vue')```
    当路由被访问的时候才去加载路由组件数据 --- 性能优化
    
## 组件通信
-   父改子(props,ref)
-   子改父(自定义事件,$parent,逆向props)
-   兄弟组件通信(创建空的vue实例,父组件做中间人)

## 移动适配
-   网易适配
    1.  设备屏幕宽度 / 设计稿宽度 = 设备的rem / 假设的设计稿rem(1rem=100px)  最终化简 = 100vw/7.5,在750的设计稿中 1rem = 100px
    2.  假设1rem=100px  750px/100px = 7.5   100vw/7.5
    3.  假设 750px的设计稿变成 640px   100vw/6.4

    -   插件使用
        1.  cnpm i postcss-px2rem postcss-px2rem-exclude -D  
        2.  下载这两个插件然后去配置config后会自动将px转换成rem 
        3.  /* no */ 在代码后面加上这个注释就不会转换

-   淘宝适配
    1.  根据设备的dpr来通过设备的宽度*dpr得到方法的viewport，也就是viewport放大dpr倍
    2.  把设备的宽度100vw分成10等分,假设当前设备的1rem=10vw    
    3.  假设元素300px / 设计稿宽度 = x / dpr*设备宽度   300 / 750 = x / 1125 x=450

    -   插件使用
        1.  cnpm i lib-flexible -S 
        2.  全局引入
        3.  依赖插件 lib-flexible(改造meta标签,根据设备的dpr缩放设备的viewport)
            /public/index.html  <meta name="viewport" content="width=device-width,initial-scale=1.0">需要注释



## import和link的区别
-   加载顺序
    1. link引入的css在加载页面时同时加载，而@import中的css要在页面加载完毕后加载
-   从属关系
    1. link是HTML提供的标签
    2. @import是css的语法规则，只能加载在style标签内和css文件中
-   兼容性
    1. import是css2.1时提出的，只能用于IE5+，而link不受兼容影响
-   DOM可控性
    1. link支持js控制DOM改变样式，而@import不支持

## ES5/ES6的复习
-   es5通过 module.exports暴露一个 或者 exports.xxx 暴露多个
-   es6通过 export default暴露一个 或者 export var xxx 暴露多个

##  git操作
-   传统 四步
    git add ./
    git commit -m “xx”
    git pull （第一次忽略）
    git push origin master 

-   github冲突问题
    拉取代码后,线上仓库git代码被修改,然后本地代码也被修改,此时提交本地的代码会发生冲突,
    解决方法:先将本地代码提交到本地仓库,然后拉取线上仓库代码,再提交到线上仓库git
    ```
        git status  查看文件状态  工作区/暂存区
        git add ./  把工作区的文件添加到暂存区
        git commit -m "把暂存区的文件提交到本地仓库"
        再拉取线上
        git pull    拉取远程主机仓库代码到 本地工作区
        git push origin master  提交本地仓库文件到线上仓库
    ```
