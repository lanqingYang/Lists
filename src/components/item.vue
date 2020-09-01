<template>
  <div class="list-item editingClass editing">
    <!-- 最外层容器 （只能有一个）-->
    <label class="checkbox">
      <!-- 自定义的多选框 -->
      <input type="checkbox" v-model="item.checked" />
      <!-- item.checked -->
      <span class="checkbox-custom"></span>
    </label>
    <input type="text" v-model="item.text" placeholder="写点什么...." />
    <!-- 单项代办事件文本框 -->
    <a class="delete-item">
      <!-- 删除图标 -->
      <span class="icon-trash"></span>
    </a>
  </div>
</template>

<script>
export default {
  props: ["item"],
  //   子组件显式的用props选项声明它期待获取的数据
  //这里声明了 它想要‘item’的数据
};
</script>

<style lang="less">
@import "../common/style/list-items.less";
</style>