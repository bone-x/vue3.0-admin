/*
 * @Author: your name
 * @Date: 2021-11-30 13:42:52
 * @LastEditTime: 2021-12-02 16:26:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \admin\src\main.js
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/init.css'
import  './font/iconfont.css'

//挂载到原型方式
const app = createApp(App);
import allApi from './utils/index'
//组件中使用
// import { getCurrentInstance } from 'vue';
// const { proxy } = getCurrentInstance ();
// proxy.$fetch()

app.config.globalProperties.$fetch= allApi;
app.use(router).use(createPinia()).use(ElementPlus).mount('#app')
