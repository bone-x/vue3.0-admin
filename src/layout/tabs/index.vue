<!--
 * @Author: your name
 * @Date: 2021-12-01 17:37:14
 * @LastEditTime: 2021-12-02 09:59:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \admin\src\layout\tabs\index.vue
-->

<template>
  <el-tabs
    v-model="state.activeTab"
    type="card"
    editable
    @tab-click="selectEvent"
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in state.TabsList"
      :key="item.path"
      :label="item.title"
      :name="item.path"
    >
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
</template>
<script setup>
import {useRoute,useRouter} from 'vue-router'
import {computed, onMounted, reactive, ref, watch} from 'vue'
import {useStore} from '@/store'
const route=useRoute();
const router=useRouter();
const store=useStore();

const state=reactive({
  TabsList:computed(()=>store.Tabs),
  activeTab:''
})

// const TabsList=computed(()=>store.Tabs);

//当前激活的选项卡--和当前激活的路由一致
// const activeTab=ref('')
const setActiveTab=()=>{
    state.activeTab=route.path;
}
//-----添加选项卡
const addTab=()=>{
    const {path,meta}=route;
    const tab={
        path,
        title:meta.title
    }
    store.addTab(tab)
}
//删除选项卡
const removeTab=(targetName)=>{
  if(targetName=='/dashboard')return;
    const tabs = state.TabsList;
      let activeName = state.activeTab;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.path === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.path
            }
          }
        })
      }
      state.activeTab= activeName;
      let tabList= tabs.filter((tab) => tab.path !== targetName);
      store.setTabs(tabList);
      router.push({path:activeName})
}
const selectEvent=(tab)=>{
    const {props}=tab;
    router.push({path:props.name})
    console.log(props)
}
watch(()=>route.path,()=>{
    setActiveTab();
    addTab();
})
onMounted(()=>{
   setActiveTab();
    addTab();
    // beforeRefresh();
})
// //解决刷新数据丢失的问题
// const beforeRefresh=()=>{
//   window.addEventListener('beforeunload',()=>{
//     sessionStorage.setItem('tabs',JSON.stringify(state.TabsList))
//   })
//   let tabSession=sessionStorage.getItem('tabs')&&JSON.parse(sessionStorage.getItem('tabs'));
//   if(tabSession&&tabSession.length>0){
//      store.setTabs(tabSession);
//   }
// }
</script>
<style scoped lange='less'>
:deep(.el-tabs__new-tab){
  display:none;
}
  :deep(.el-tabs__header){
    margin:0;
  }
  :deep(.el-tabs__item){
    height: 26px !important;
    line-height:26px !important;
    text-align: center !important;
    border:1px solid #d8dce5!important;
    margin:0 3px!important;
    color:#495060;
    font-size:12px!important;
    padding:0 10px!important;
  }
  :deep(.el-tabs__nav){
    border:none!important;
  }
  :deep(.is-active){
    border-bottom:1px soloid transparent !important;
    border:1px solid #42b983!important;
    background-color:#42b983!important;
    color:#fff!important;
  }
  :deeep(.el-tabs__item:hover){
    color:#495060;
  }
  :deeep(.is-active:hover){
    color:#fff;
  }
</style>