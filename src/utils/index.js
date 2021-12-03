/*
 * @Author: your name
 * @Date: 2021-12-02 16:21:40
 * @LastEditTime: 2021-12-02 16:21:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \admin\src\utils\index.js
 */
let apiObject={};
const importAll=(r)=>{
    r.keys().forEach((key)=>Object.assign(apiObject, r(key).default))
}
importAll(require.context("../api", false, /\.js$/))
export default{
    ...apiObject
}