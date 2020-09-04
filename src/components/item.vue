<template>
  <transition name="slide-fade">
    <div
      class="list-item editingClass editing"
      :class="{checked:item.checked}"
      v-show="!item.isDelete"
    >
      <!-- 最外层容器 （只能有一个）-->
      <label class="checkbox">
        <!-- 自定义的多选框 -->
        <input type="checkbox" v-model="item.checked" @change="onChange" :disabled="locked" />
        <!-- item.checked -->
        <span class="checkbox-custom"></span>
      </label>
      <input
        type="text"
        v-model="item.text"
        placeholder="写点什么...."
        :disabled="item.checked || locked"
        @keyup.enter="onChange"
      />
      <!-- 单项代办事件文本框 -->
      <a class="delete-item" v-if="item.checked && !locked" @click="item.isDelete=true;onChange()">
        <!-- 删除图标 -->
        <span class="icon-trash"></span>
      </a>
    </div>
  </transition>
</template>

<script>
//item是todo的子组件，它接受一个item，来进行处理

import { editRecord } from "../api/api";
export default {
  // 版本1
  // props: ["item"],
  //   子组件显式的用props选项声明它期待获取的数据
  //这里声明了 它想要‘item’的数据

  //版本2
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          checked: true,
          text: "你好，世界",
        };
      },
    },
    index: {},
    id: {},
    init: {},
    locked: {},
  },

  methods: {
    //用户无论删除、修改、锁定都可以利用这个方法
    onChange() {
      editRecord({
        id: this.id,
        record: this.item,
        index: this.index,
      }).then(data => {
        this.init();
        this.$store.dispatch("getTodo");
      });
    },
  },
};
</script>

<style lang="less">
@import "../common/style/list-items.less";
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
</style>