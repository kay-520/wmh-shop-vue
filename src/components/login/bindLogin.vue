<template>
  <div>
    <div class="Joint">
      <a class="logon_logo">
        <img src="http://static.mayikt.com/logomayishangcheng.png"/>
      </a>
      <div class="Joint_container" id="app">
        <h2>请登录您要关联的账号</h2>
        <div class="regbox">
          <div class="el-input el-input--suffix">
            <input type="text" autocomplete="off"
                   v-model="phone"
                   placeholder="账号" class="el-input__inner">
          </div>
          <div class="el-input el-input--suffix">
            <input type="password"
                   v-model="passWord"
                   autocomplete="off" placeholder="密码" class="el-input__inner">
            <span class="el-input__suffix"><span class="el-input__suffix-inner">
							</span>
						</span>
          </div>
        </div>
        <button type="button" @click="login()" class="el-button el-button--default">
          <span>绑定并登录</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "bindLogin",
    data() {
      return {
        phone: '',
        passWord: ''
      }
    },
    methods: {
      login() {

      }
    }
  }
</script>

<style scoped>
  .el- * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  .logon_logo {
    display: block;
    width: 1130px;
    height: 100px;
    margin: auto;
    padding-top: 20px;
  }

  .Joint {
    width: 100%;
    min-height: 100%;
    height: auto;
    background-color: #f9f9f9;
    position: relative;
  }

  .Joint_container {
    width: 800px;
    min-height: 410px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .Joint_container h2 {
    margin-top: 50px;
    font-size: 30px;
    text-align: center;
    color: #333;
    font-weight: normal;
    font-family: Pingfang Sc;
  }

  .regbox {
    width: 332px;
    margin: 0 auto;
    padding-top: 40px;
    line-height: 20px;
  }

  .regbox .el-input {
    padding-bottom: 14px;
  }

  .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
  }

  .Joint_error_box {
    height: 16px;
  }

  .el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #FFF;
    border: 1px solid #DCDFE6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }

  .Joint_container .el-button {
    margin: auto;
    background-color: #ff6700;
    width: 332px;
    height: 50px;
    display: block;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    outline: 0;
    border: none;
    margin-top: 10px;
  }

  input--suffix .el-input__inner {
    padding-right: 30px;
  }

  .el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;
  }

  .bind_old {
    color: #ff6700;
    font-size: 14px;
    text-align: center;
  }
</style>
