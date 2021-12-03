<!--
 * @Author: your name
 * @Date: 2021-11-30 23:05:42
 * @LastEditTime: 2021-12-01 16:26:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \admin\src\layout\menu\menuItem.vue
-->
<template>
    <template v-for='(menu,index) in MenuList' :key='menu.path'>
           <el-sub-menu v-if='menu.children&&menu.children.length>0' :index='menu.path'>
                <template #title>
                    <i :class="['iconfont',menu.meta.icon].join(' ')"></i>
                    <span>{{menu.meta.title}}</span>
                </template>            
              
               <MenuItem :MenuList='menu.children'/>
            </el-sub-menu>
            <el-menu-item v-else :index='menu.path' style='color:#f4f4f5'>
                <i :class="['iconfont',menu.meta.icon].join(' ')"></i>
                <template #title>{{menu.meta.title}}</template>
            </el-menu-item>
    </template>
</template>
<script setup>
defineProps(['MenuList']);
</script>
<style lang='less' scoped>
.iconfont{
    padding-right:8px;
}
</style>

