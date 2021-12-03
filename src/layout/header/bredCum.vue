
<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for='(item,index) in state.tabs' :key='index'>{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script setup>
import { reactive, watch } from 'vue';
import {useRoute} from 'vue-router'
const route=useRoute();
let state=reactive({
    tabs:[]
})
const getCurrentCurm=()=>{
    let mached=route.matched.filter((item,index)=>item.meta&&item.meta.title);
    //判断第一个不是首页的话就构造一个
    let first=mached[0];
    if(first.path!='/dashboard'){
         mached=[{path:'/dashboard',meta:{title:'首页'}},...mached]
    }
    state.tabs=mached;
}
getCurrentCurm();
watch(()=>route.path,()=>getCurrentCurm())
</script>
