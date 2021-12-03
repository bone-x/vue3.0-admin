
<template>
    <el-container class="layout">
      <el-aside width="auto" class="aside">
          <Menu />
      </el-aside>
      <el-container>
        <el-header class="header">
            <Header />
        </el-header>
        <el-main class="main">
            <Tabs />
            <router-view />
        </el-main>
      </el-container>
    </el-container>
</template>
<script setup>
import { useRoute } from 'vue-router'
import Header from './header'
import Menu from './menu'
import Tabs from './tabs'
const route=useRoute();
// import { defineComponent } from 'vue'
// export default defineComponent({
//     // components:{
//     //     Header
//     // },
//     setup() {
        
//     },
// })
</script>

<style scoped lang='less'>
.layout{
    height:100%;
    .aside{
        background-color: rgb(48,65,86);
    }
    .header{
        height:50px;
        line-height:50px;
        border-bottom:1px solid #e5e5e5;
        //  background: blueviolet;
    }
    .main{
        // background:#aaa;
    }
}
</style>