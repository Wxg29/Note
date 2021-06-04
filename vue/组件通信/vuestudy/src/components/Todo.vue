<template>
  <div>
    <h3 class="op">This is an Todo page</h3>
    <p>es5模块化msg --- {{msg}}</p>
    <!-- <p>es5模块化num --- {{num}}</p> -->
    <!-- <p>结构对象暴露模块化num --- {{num}}</p> -->
    <p>es6一个模块暴露一个接口 --- {{list}}</p>
    <p>es6一个模块暴露多个接口 --- {{word}}--{{say()}}--{{obj}}</p>
  </div>
</template>
<script>
// es5一个模块暴露一个接口
var msg = require("@/utils/modularity5");
// var num = require("@/utils/modularity5");
// var { num } = require("@/utils/modularity5");
// console.log(num); //undefined

/* es5一个模块暴露多个接口 */
var { tip, arr } = require("@/utils/modularity51");
// console.log(tip, arr);

/*es6 */
//一个模块暴露一个接口
import list from "@/utils/modularity6";

//一个模块暴露多个接口
import { word, say, obj } from "@/utils/modularity61";

export default {
  data() {
    return {
      msg,
      list,
      word,
      say,
      obj
    };
  }
};
</script>

<style lang="scss" scoped>
.op {
  background: cadetblue;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
h3,
p {
  color: brown;
}
</style>