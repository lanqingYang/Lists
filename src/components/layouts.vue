<template>
  <section class="container" :class="{'menu-open':menuOpen}">
    <!-- 最外层容器 -->
    <!-- 根据menuOpen的值来判断是否使用menu-open样式 -->
    <section class="menu">
      <menus></menus>
    </section>
    <!-- 左边容器 -->

    <div class="content-overlay" @click="$store.dispatch('updateMenu')"></div>
    <!-- 这个是当前页面收缩覆盖在内容上面的模糊层，点击后复原，它可以直接调用vux actions.js里面的uapdataMenu方法 -->
    <section class="content-container">
      <todo></todo>
    </section>
    <!-- 右边容器 -->
  </section>
</template>

<script>
import menus from "./menus"; //导入刚才创建的 menus组件
import todo from "./todo";
export default {
  components: {
    menus,
    todo,
  },
  computed: {
    menuOpen() {
      return this.$store.state.menuOpen;
    },
  },
};
</script>

<style lang="less">
@import "../common/style/layouts.less";
</style>
