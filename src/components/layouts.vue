<template>
  <section class="container">
    <!-- 最外层容器 -->

    <section class="menu">
      <menus></menus>
    </section>
    <!-- 左边容器 -->

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
};
</script>

<style lang="less">
@import "../common/style/layouts.less";
</style>
