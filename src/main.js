// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Mock from "./mock"; //引入mock模块
import store from "./vuex/store";

Mock.start();

//关闭生产模式下给出的提示
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router, //注入路由配置
  template: "<App/>", //配置根模板，即打开页面显示那个组件
  store, //注入实例
  components: { App } //注入组件
});
