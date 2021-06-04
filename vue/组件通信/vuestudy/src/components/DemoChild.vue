<template>
  <div class="demochild">
    <h1>demochild --- demochild --- demochild</h1>
    <p>word --- {{wordprops}}</p>
    <p>childword --- {{childword}}</p>
    <button @click="changeParentWord">子改父 $parent 修改word</button>
    <button @click="changeParentMsg">子改父 自定义事件</button>
    <button @click="changeMyself">子改父 逆向 props</button>
  </div>
</template>

<script>
export default {
  props: {
    wordprops: String,
    changeMyself: Function
  },
  data() {
    return {
      childword: "childword"
    };
  },
  mounted() {},
  methods: {
    //子改父  子组件通过 $parent修改
    changeParentWord() {
      this.$parent.word = "子组件通过 $parent修改的";
    },
    //子改父 自定义事件
    changeParentMsg() {
      this.$emit("myevent");
    }
  }
};
</script>