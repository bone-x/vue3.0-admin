<!--
 * @Author: your name
 * @Date: 2021-11-30 16:28:59
 * @LastEditTime: 2021-12-03 14:24:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \admin\src\views\category\categoryList.vue
-->
<template>
    <section class="box">
        <el-table 
        :data="state.tableData" 
        v-loading="state.loading"
        element-loading-text="Loading..."
        :element-loading-spinner="state.svg"
        element-loading-svg-view-box="-10, -10, 50, 50"
        element-loading-background="rgba(0, 0, 0, 0.3)"
        border empty-text='暂无数据！'
         style="width: 100%">
            <el-table-column  label="日期">
                <template #default="scope">
                    {{dayjs(scope.row.createTime).format('YYYY-MM-DD HH:mm:ss')}}
                </template>
            </el-table-column>
            <el-table-column prop="_id" label="分类id" />
            <el-table-column prop="name" label="名称" />
            <el-table-column label="操作"  width="130">
                <template #default="scope">
                    <el-button type="primary" size="mini" :icon="Edit" @click="upDate(scope.row,scope.$index)" ></el-button >
                    <el-button type="danger"  size="mini"  :icon="Delete"  @click="del(scope.row,scope.$index)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <footer class="foot">
           <el-pagination background 
            layout="prev, pager, next"
            @prev-click='changePage'
            @current-change='changePage'
            @next-click='changePage'
            :default-page-size='state.PageSize'
            :total='state.PageTotal'> 
           </el-pagination>
        </footer>
    </section>
</template>
<script setup>
import { getCurrentInstance, onMounted, reactive } from 'vue'
import { Edit, Delete } from '@element-plus/icons'
import { ElMessageBox,ElMessage } from 'element-plus';
const dayjs = require('dayjs');
const { proxy } = getCurrentInstance();
const state=reactive({
    tableData:[],
    loading:false,
    svg: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0.1)"/>
      `,
    PageSize:8,
    currentPage:1,
    PageTotal:0,
})
const getData=async(PageSize,currentPage)=>{
    state.loading=true;
    let {data,PageTotal}=await proxy.$fetch.CategoryList({PageSize,currentPage});
     setTimeout(()=>{
        state.loading=false;
     },500)
    state.tableData=data;
    state.PageTotal=PageTotal;
}
const upDate=(row,index)=>{
    console.log(row)
    console.log(index)
}
const del=(item)=>{
    console.log(item.name)
     ElMessageBox.confirm(`要删除‘${item.name}’数据吗?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
        await proxy.$fetch.delCate(item._id);
            ElMessage.success({
            message: '删除成功!'
            });
        }).catch(() => {
            ElMessage.info({
            message: '已取消删除'
            });
        });
}

const changePage=(page)=>{
    getData(state.PageSize,page);
}
onMounted(()=>{
    getData(state.PageSize,state.currentPage);
})
</script>
<style lange='less' scoped>
.foot{
    margin-top:10px;
}
:deep(.el-pagination,.btn-prev){
    padding-left:0;
}
:deep(.el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li){
    margin-left:0!important;
}
</style>