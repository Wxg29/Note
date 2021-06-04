<template>
  <div class="demo">
    <h3>This is an Demo page 单文件组件 single-file components</h3>
    <p>word ===> {{word}}</p>
    <p>msg ===> {{msg}}</p>
    <button v-on:click="propsChangeWord">父改子 props 修改word</button>
    <button v-on:click="refChangeMsg">父改子 ref 修改childword</button>
    <hr />
    <DemoChild :wordprops="word" ref="oneref" @myevent="eventChangeMsg" :changeMyself="changMsg"></DemoChild>
  </div>
</template>

<script>
import DemoChild from "@/components/DemoChild.vue";
export default {
  //局部注册的模板
  components: {
    DemoChild
  },
  data() {
    return {
      word: "w-o-r-d",
      msg: "m-s-g"
    };
  },
  methods: {
    //父改子 props 修改word
    propsChangeWord() {
      this.word = "武汉";
    },
    //父改子 ref 修改childword
    refChangeMsg() {
      //也可以是方法写在子组件  父组件 this.$refs来调用
      this.$refs.oneref.childword = "深圳";
    },
    //子改父 自定义事件
    eventChangeMsg() {
      this.msg = "子改父自定义事件";
    },
    //逆向 props : 父组件通过props把修改自身的值传给子组件来调用就成了子改父
    changMsg() {
      this.msg = "父组件通过props把修改自身的值传给子组件来调用就成了子改父";
    }
    //兄弟组件通信  const bus = new Vue(); 空的vue实例  A组件bus.$emit发送然后  B组件的mounted钩子函数监听 bus.on
  }
};
</script>


<style lang="scss" scoped>
h3,
p {
  color: green;
}
</style>