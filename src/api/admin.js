/*
 * @Author: your name
 * @Date: 2021-12-02 16:19:26
 * @LastEditTime: 2021-12-03 14:04:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \admin\src\api\admin.js
 */
import request from '../utils/request'
export default{
    addCate(params){//获取订单列表
        return request.post(`/categories`,params,true)
    },
    CategoryList(params){
        return request.get(`/categories`,params)
    },
    delCate(id){
        return request.del(`/categories/${id}`)
    }
}
