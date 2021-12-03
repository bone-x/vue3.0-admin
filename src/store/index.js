/*
 * @Author: your name
 * @Date: 2021-11-30 13:42:52
 * @LastEditTime: 2021-12-02 00:42:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 * @FilePath: \admin\src\store\index.js
 */
import { defineStore } from "pinia";

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: "main",
  // state: 返回对象的函数
  state: ()=> ({
    menuFlag:false,
    Tabs:sessionStorage.getItem('tabs')&&JSON.parse(sessionStorage.getItem('tabs'))||[]
  }),
  getters: {},
  actions: {
    setMenuFlag(){
      this.menuFlag=!this.menuFlag;
    },
    addTab(tab){
      if(this.Tabs.some(item=>item.path==tab.path)) return;
      this.Tabs.push(tab);
      sessionStorage.setItem('tabs',JSON.stringify(this.Tabs))
    },
    setTabs(params){
      sessionStorage.setItem('tabs',JSON.stringify(params))
      this.Tabs=params;
    }
  }
});