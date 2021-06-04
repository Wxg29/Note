// ES5模块化练习

/*
    -   ES5模块化
    -   commonJS 模块化开发
    -   模块定义 define JS文件本身就是一个默认的模块
    -   模块引用 require
    -   模块暴露 exports 一个模块可以暴露多个接口
*/

//一个模块暴露一个接口
var msg = "wg1998"
var num = "2021"
module.exports = msg;  //默认暴露 优先级最高
// module.exports = num;
//暴露多个 下面的会覆盖上面的

// exports.num = num;  //结构对象暴露,没用,默认暴露优先级最高