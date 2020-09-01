import Vue from "vue"; //导入vue
import Router from "vue-router"; //导入vue-router库
import layouts from "@/components/layouts"; //导入layouts.vue

Vue.use(Router); //全局注册Router组件，他会绑定到Vue实例里面

export default new Router({
  //创建router实例，然后传'routers'配置
  routes: [
    {
      path: "/", //访问路径
      name: "layouts", //路径名
      component: layouts //访问的组件，即访问‘/’，它会加载Layout组件的所有内容
    }
  ]
});
