<template>
  <el-scrollbar>
      <el-menu
          :default-active="state.defaultIndex"
          class="el-menu-vertical-demo"
          :collapse="state.isCollapse"
          @open="handleOpen"
          @close="handleClose"
          background-color='#304156'
          router
        >
        <MenuHeader class="header"/>
        <MenuItem :MenuList='state.MenuList'/>
      </el-menu>
  </el-scrollbar>
</template>
<script setup>
    import MenuHeader from './MenuHeader.vue'
    import MenuItem from './menuItem.vue'
    import {useRoute} from 'vue-router'
    import {ref,reactive, computed} from 'vue'
    import {useStore} from '@/store'
    const store=useStore();
    const route=useRoute();
    const state=reactive({
      MenuList:[
         {
          path: '/dashboard',
           meta:{
            title:'主页',
            icon:'icon-wangzhejingjileitai',
            roles:["sys:manage"]
          },
          children:[]
        },
        {
          path:'/category',
          name:'category',
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
              meta:{
                title:'分类添加'
              }
            },
            {
              path:'/category/categoryList',
              name:'categoryList',
              meta:{
                title:'分类列表'
              }
            }
          ]
        }
      ],
      isCollapse:computed(()=>store.menuFlag),
      defaultIndex:computed(()=>route.path)
    })

    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
   
</script>
<style lang='less' scoped>
.header{
  position:sticky;
  top:0;
  z-index:1000;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  border-right:none;
}
 ::v-deep .el-sub-menu .el-sub-menu__title{
  color:#f4f4f5!important;
}
::v-deep  .el-menu .el-menu-item{
  color:#bfcbd9;
}
::v-deep .el-menu-item.is-active{
  color:#409eff!important;
}
::v-deep .is-opened .el-menu-item{
  background:#1f2d3d!important;
}
::v-deep .el-menu-item:hover{
  background:#001528!important
}
</style>

