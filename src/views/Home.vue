<template>
  <el-container style="height:100vh">
    <el-aside width="200px" style="background:#f3f3f3;overflow-x:hidden">
    <el-scrollbar>
        <el-menu router='true'>
            <template v-for='(item,index) in routes' :key='index'> 
                <el-sub-menu v-if='item.children'>
                    <template #title>
                         <i :class="['iconfont',item.meta.icon].join(' ')"></i>
                        <span class="title">{{item.meta.title}}</span>
                    </template>
                    <el-menu-item :route='childItem.path' v-for='(childItem,childIndex) in item.children' :key='childIndex'>{{childItem.meta.title}}</el-menu-item>
                </el-sub-menu>
                <el-menu-item v-else :route='item.path'>
                     <i :class="['iconfont',item.meta.icon].join(' ')"></i>
                     <span class="title">{{item.meta.title}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <el-icon ><setting /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>Tom</span>
      </el-header>

      <el-main class="box">
          <router-view/>
      </el-main>
     <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Message, Menu, Setting } from '@element-plus/icons'
import router from '../router'
export default defineComponent({
  components: {
    Message,
    Setting,
    'icon-menu': Menu,
  },
  setup() {
    const routes=router.options.routes;
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    }

    const tableData = ref(Array(20).fill(item))

    return {
      tableData,
      routes
    }
  },
})
</script>

<style lang='less' scoped>
.title{
    padding-left:5px;
}
.box{
    height:calc(100vh - 120px)
}
.el-header,.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  line-height: 60px;
}
.el-sub-menu{
    /* background-color: rgb(0, 21, 41); */
    color: rgba(255, 255, 255, 0.65);
}
.el-aside {
  color: var(--el-text-color-primary);
}
.el-menu-item.is-active{
    color:chocolate!important
}
</style>