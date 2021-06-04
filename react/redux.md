##  redux 单项数据流      cnpm i redux react-redux -S

http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html
http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html  //react-redux

##  异步操作
-   1.axios请求成功 then 回调里面发送action (store.dispatch())  ---不建议使用
-   2.使用中间件  改造store.dispatch ---建议
    没有改造之前：store.dispatch只能接受一个对象actinon 
    改造以后：store.dispatch不仅可以接收对象 还可以接收函数（axios）

-   插件： cnpm i redux-thunk redux-promise -S



##  react-redux     cnpm i react-redux -S
-  原理逻辑跟redux一样  只是针对组件视图层操作store做了优化 

-  @connect装饰器 cnpm i @babel/plugin-proposal-decorators -D
    在package.json文件下找到bebel属性 增加下面配置
    ```js
        "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ]
    ]
    ```