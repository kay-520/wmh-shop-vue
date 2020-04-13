// import axios from 'axios'
// import {Message, MessageBox} from 'element-ui'
// // import Qs from 'qs' //引入方式
// import {getToken, getContractNo} from './auth'
//
// //form数据格式化
// function formdata(obj) {
//   //表单格式提交
//   let data = new FormData();
//   for (let j in obj) {
//     data.append(j, obj[j]);
//   }
//   return data;
// }
//
// let request = axios.create({
//   baseURL: process.env.BABEL_ENV === 'production' ? `${window.location.protocol}//${window.location.host}/api` : `http://sitxqy.bndxqc.com/api`,
//   timeout: 2500,
//   headers: {
//     "Content-Type": "application/json",
//     channel: "XQYH5",
//   }
// });
//
// // 响应拦截
// request.interceptors.request.use(
//   config => {
//     MessageBox.open();
//     config.headers.access_token = getToken();
//     if (config.method === 'post') {
//       if (!config.data.FLAG) {
//         config.data = formdata(config.data);
//       } else {
//         config.data = JSON.stringify(config.data);
//       }
//     }
//     return config;
//   },
//   error => {
//     setTimeout(() => {
//       MessageBox.close()
//     }, 1000);
//     return Promise.reject(error)
//   }
// )
//
// function layout() {
//   MessageBox.alert('由于您登录时间过长，为确保您的账户安全，请重新登录', '提示').then(() => {
//     window.location.href = `/login?ht=${getContractNo()}`
//   })
// }
//
// request.interceptors.response.use(
//   response => {
//     const {status, statusText, data} = response;
//     const {httpCode, msg} = data;
//     MessageBox.close();
//     if (status !== 200) {
//       if (status == 499 || status == 498) {
//         layout();
//       }
//       return Promise.reject(statusText)
//     }
//     //token过期了，需要重新登录
//     if (httpCode == 499 || httpCode == 498) {
//       layout();
//       return Promise.reject(msg)
//     } else if (httpCode == 200) {
//       return Promise.resolve(data)
//     } else {
//       MessageBox.alert(msg, "提示").then(r =>);
//       return Promise.reject(msg)
//     }
//   },
//   error => {
//     MessageBox.close()
//     error = error ? error.toString() : "";
//     if (error.includes('499') || error.includes('498')) {
//       layout();
//       return Promise.reject(error)
//     }
//     // Toast({
//     //   message: '请重新请求！',
//     //   duration: 5000
//     // });
//     return Promise.reject(error)
//   }
// );
