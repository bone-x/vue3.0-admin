<!--
 * @Author: your name
 * @Date: 2021-11-30 18:06:51
 * @LastEditTime: 2021-12-02 09:17:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A E
 * @FilePath: \admin\src\layout\header\index.vue
-->

<template>
    <section class="head">
        <section class="bread">
            <i :class="['iconfont',menuFlag?'icon-cebianshouqi':'icon-shouqi1'].join(' ')" @click="exchange"></i>
            <BredCum />
        </section>
        <section class="logo">
            <img :src="require('../../assets/logo.jpg')" alt="">
        </section>
    </section>
</template>
<script setup>
import BredCum from './bredCum.vue'
import { useStore } from "@/store";
import { computed } from "vue";
const store=useStore();
const menuFlag=computed(()=>store.menuFlag)
const exchange=()=>{
    store.setMenuFlag();
}
</script>
<style lang="less" scoped>
.head{
    display:flex;
    justify-content: space-between;
    .iconfont{
        font-size:22px;
        cursor: pointer;
        padding-right:15px;
    }
    .bread{
        display:flex;
        align-items:center;
    }
    .logo{
        display:flex;
        align-items:center;
        img{
            width:40px;
            height:40px;
            border-radius:100%;
            border:2px solid #aaa;
        }
    }

}
</style>
