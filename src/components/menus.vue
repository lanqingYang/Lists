<template>
  <!-- 绑定点击事件goList，并且判断当todoId时候item.id时，文字高亮度 -->
  <div class="list-todos">
    <!-- 菜单容器 -->
    <!-- 绑定class，当items循环中的id等于设置的选中todoId时，加上active这个class -->
    <a
      class="list-todo activeListClass list"
      @click="goList(item.id)"
      :class="{ active: item.id === todoId }"
      v-for="item in items"
    >
      <!-- 单个菜单容器 -->
      <span class="icon-lock" v-if="item.locked"></span>
      <!-- 锁图标 -->
      <span class="count-list" v-if="item.count">{{ item.count }}</span>
      <!-- 数字 -->
      {{ item.title }}
    </a>
    <!-- 点击新增，添加一个 TodoList -->
    <a class="link-list-new" @click="addTodoList">
      <span class="icon-plus"></span>
      新增
    </a>
  </div>
</template>

<script>
//组件与布局阶段
// export default {
//   data() {
//     //data函数
//     return {
//       items: [
//         // 菜单数据模拟
//         {
//           title: "星期一",
//           count: 1,
//           locked: true
//         },
//         {
//           title: "星期二",
//           count: 2,
//           locked: true
//         },
//         {
//           title: "星期三",
//           count: 3,
//           locked: false
//         }
//       ]
//     };
//   }
// };

//2.mock阶段
import { getTodoList, addTodo } from "../api/api";
//引入封装好的两个接口
export default {
  data() {
    return {
      items: [], //菜单数据
      todoId: "", //默认选中id
    };
  },
  created() {
    //在dom还没有开始渲染的时候执行，调用请求菜单列表数据的接口
    getTodoList({}).then((res) => {
      const TODOS = res.data.todos; //数据都会返回在res.data中
      this.items = TODOS; //把菜单数据赋值给定义的this.items
      this.todoId = TODOS[0].id; //把菜单数据默认的第一个对象id赋值给选中id
    });
  },
  methods: {
    goList(id) {
      //点击菜单，替换选中的id
      this.todoId = id;
    },
    addTodoList() {
      //点击新增按钮的时候
      //调用新增菜单的接口，在接口调用成功再请求数据
      addTodo({}).then((data) => {
        getTodoList({}).then((res) => {
          const TODOS = res.data.todos;
          this.todoId = TODOS[TODOS.length - 1].id;
          this.items = TODOS;
        });
      });
    },
  },

  watch: {
    todoId(id) {
      this.$router.push({ name: "todo", params: { id: id } });
      // 监听到用户的点击todoId的变化再跳转路由
    },
  },
};
</script>

<style lang="less">
@import "../common/style/menu.less";
</style>
