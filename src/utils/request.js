/*
 * @Author: your name
 * @Date: 2021-12-02 16:03:29
 * @LastEditTime: 2021-12-03 14:44:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \admin\src\utils\request.js
 */
import axios from 'axios'
import {useRouter} from 'vue-router'
import { ElLoading,ElNotification  } from 'element-plus'
const router=useRouter();
var service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 3000,
})
//添加请求拦截器
let  Load=null;
const showLoading= ()=>{
     Load= ElLoading.service({ fullscreen: true });
}
service.interceptors.request.use(function (config) {
    config.headers['token'] ='123';
    return config
}, function (error) {
    return Promise.reject(error)
})
//添加响应拦截器
service.interceptors.response.use(function (response) {
        //关闭加载动画
        Load&&Load.close()

        let {status} = response;
        let {code, msg} = response.data;
        if (status === 200) {
            if (code === 500) {

                // Toast(String(msg))

                throw Promise.reject(msg)
            } else {
                return response && response.data;
            }
        }
        return response
    }, function (error) {
        Load&&Load.close()
        let {status} = error.response;
        if (status === 401) {
            console.log('去登录')   

        } else if (status === 500||status === 404) {
            ElNotification({
                title: 'Error',
                message: '服务端异常！',
                type: 'error',
              })
        }
        return Promise.reject(error)
    }
)

export default {
    get(url, params, loading = false) {
        loading && showLoading();
        return new Promise((resolve, reject) => {
            service.get(url, {
                params:params
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err)
            })
        });
    },
    post(url, params, loading = false) {
        loading && showLoading();
        return new Promise((resolve, reject) => {
            service.post(url, params)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err)
                })
        });
    },
    put(url, params, loading = false) {
        loading && showLoading();
        return new Promise((resolve, reject) => {
            service.put(url, params)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err)
                })
        });
    },
    del(url, params, loading = false) {
        loading && showLoading();
        return new Promise((resolve, reject) => {
            service.delete(url, params)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err)
                })
        });
    }
}