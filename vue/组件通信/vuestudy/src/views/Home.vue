<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1>This is an home page</h1>
    <hr />
    <Demo></Demo>
  </div>
</template>

<script>
//导入组件模块      @ is an alias to /src
import Demo from "@/components/Demo.vue";
import Todo from "@/components/Todo.vue";

export default {
  name: "Home",
  //局部注册组件模块
  components: {
    Demo,
    Todo
  }
};
</script>
