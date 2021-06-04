##  https://github.com/camsong/blog/issues/3
-   cnpm i redux-immutable -S

##  使用immutable目的
可变对象：对象数组这类引用数值类型 成为 可变对象mutable(修改这些可变对象太深可能会无法更新视图)
不可变对象：字符串 数字这些基本数据类型就是不可变对象  修改他们一定会触发试图更新

引入immutable.js 库的目的就是想像 操作不可变对象一样 操作对象数据（可变对象）把对象数组变成不可变对象

##  方法
-   Map():原生object转Map对象，（只会转换第一层，注意和fromJS的区别）
-   List():原生array转List对象，（只会转换第一层，注意和fromJS的区别）
-   fromJS():原生js转immutable对象（深度转换，会将内部嵌套的对象和数组全部转成immutable）
-   toJS():immutable对象转原生js，（深度转换，会将内部嵌套的Map和List全部转换成原生js）
-   immutableData.toJS();

-   查看List或者Map大小
-   immutableData.size  或者    immutableData.count()
-   is():判断两个immutable是否相等
-   merge():对象合并
    ```js
        var imA = immutable.fromJS({a:1});
        var imB = immutable.fromJS({b:2});
        var imC = imA.merge(imB)
        console.log(imC.toJS()) {a:1,b:2}
    ```

-   增删改查(所有操作都会返回新的值，不会修改原来的值)
    ```js
    var immutabeleData = immutable.fromJS({
        a:1,
        b:2,
        c:{
            d:3
        }
    })
    var data1 = immutabeleData.get("a") //data=1
    var data2 = immutabeleData.getIn(["c","d"])//data2=3   getIn用于深层次的结构访问

    var data3 = immutabeleData.set("a",2) //data3 ---> a=2
    var data4 = immutabeleData.setIn(["c","d"],4)//data4 ---> d=4
    var data5 = immutabeleData.update("a",function(x){return x+4})  //data5 ---> a=5

    var data6 = immutabeleData.updateIn(["c","d"],function(x){return x+4}) //data6 ---> d = 7
    var data7 = immutabeleData.delete("a") //data7 ---> a不存在
    var data8 = immutabeleData.deleteIn(["c","d"])//data8 --->d不存在
    ```

    immutable 只能用于操作对象和数组