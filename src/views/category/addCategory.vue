<!--
 * @Author: your name
 * @Date: 2021-11-30 15:46:47
 * @LastEditTime: 2021-12-03 10:37:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \admin\src\views\category\addCategory.vue
-->

<template>
    <section class="box">
        <el-form
            ref="ruleForm"
            :model="state.ruleForm"
            :rules="state.rules"
            class="demo-ruleForm"
        >
            <el-row :gutter="20" class="line">
                  <el-col :span="12">
                        <el-form-item  prop="name">
                        <el-input v-model="state.ruleForm.name" placeholder="输入分类名称" clearable />
                        </el-form-item>
                    </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12"> <el-button type="primary" @click='add("state.ruleForm")'>确定</el-button></el-col>
            </el-row>
        </el-form>
    </section>
</template>
<script setup>
    import { getCurrentInstance,ref,reactive} from 'vue';
    import { ElMessage } from 'element-plus'
    import {useRouter} from 'vue-router'
    const router=useRouter();
    const { proxy } = getCurrentInstance();
    //使用表单rule ,官网给的还是2.0的写法
    const ruleForm = ref(null)
    const state=reactive({
        ruleForm:{
            name:''
        },
        rules:{
            name: [
            {
                required: true,
                message: '请输入名称',
                trigger: 'blur',
            },
            ],
        }
    })
    const add=()=>{
        ruleForm.value.validate(async(valid) => {
            if (valid) {
               let {code}=await  proxy.$fetch.addCate({name:state.ruleForm.name});
                    if(code==200){
                        ElMessage({
                            message: '添加成功！',
                            type: 'success',
                        })
                        router.push({path:'/category/categoryList'})
                    }
                } 
                else {
                    return false
                }
        })
    } 
</script>

<style lang="less" scoped>
.box{
    // margin:20px;
    .line{
        margin:20px;
    }
}
</style>