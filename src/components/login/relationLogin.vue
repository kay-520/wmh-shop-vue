<template>
  <div class="bind">
    <div class="bind_contain">
      <h1>确认关联小米账号</h1>
      <img src="http://static.mayikt.com/QQ20191226.png" />
      <p class="name">隔壁老王</p>
      <p>您的QQ尚未关联小米账号</p>
      <div class="bind_bottom">
        <router-link to="/register">关联新账号</router-link>
        <a class="old_" href="javascript:void(0);" onclick="locationBindLogin()">关联到已有账号</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "relationLogin",
    methods:{
      locationBindLogin(){

      }
    }
  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  .bind {
    height: 100%;
    background-color: #f9f9f9;
  }

  .bind_contain {
    width: 850px;
    height: 600px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
  }

  .bind_contain h1 {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    padding: 50px;
  }

  .bind_contain img {
    height: 100px;
    width: 100px;
  }

  .bind_contain p {
    font-size: 18px;
    padding: 10px 0;
  }

  .bind_contain .name {
    font-weight: 600;
    padding-top: 20px;
  }

  .bind_bottom {
    width: 358px;
    margin: auto;
  }

  .bind_bottom a {
    text-decoration: none;
    display: block;
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
    color: #fff;
    background-color: #ff6700;
    margin-top: 50px;
  }

  .bind_bottom .old_ {
    border: 1px solid #ccc;
    background-color: #fff;
    color: #757575;
    margin-top: 20px;
  }
</style>
