/*
 * @Author: your name
 * @Date: 2021-11-30 13:42:52
 * @LastEditTime: 2021-12-02 15:44:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \admin\src\router\index.js
 */

import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/index.vue'
const routes = [
  {
    path: '/',
    component: Layout,
    redirect:'/dashboard',
    children:[
      {
        path:'/dashboard',
        component: () => import(/* webpackChunkName: "about" */ '../layout/dashbord/index.vue'),
        name:'dashboard',
        meta:{
          title:'主页',
          icon:'icon-wangzhejingjileitai',
        },
      }
    ]
  },
  {
    path:'/category',
    name:'category',
    component: Layout,
    alwaysShow:true,
    meta:{
      title:'分类管理',
      icon:'icon-jian',
      roles:["sys:manage"],
      parentId:0,
    },
    children:[
      {
        path:'/category/addCategory',
        name:'addCategory',
        component: () => import(/* webpackChunkName: "about" */ '../views/category/addCategory.vue'),
        meta:{
          title:'分类添加'
        }
      },
      {
        path:'/category/categoryList',
        name:'categoryList',
        component: () => import(/* webpackChunkName: "about" */ '../views/category/categoryList.vue'),
        meta:{
          title:'分类列表'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  document.title=to.meta.title;
  //这里做登录权限判断
  next();
})

export default router
