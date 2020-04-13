<template>
  <div>
    <div class="logon">
      <a class="logon_logo">
        <router-link to="/"><img src="http://static.mayikt.com/logomayishangcheng.png"/></router-link>
      </a>
      <div class="logon_container" id="app">
        <div class="logon_container_inner">
          <div class="logon_input">
            <div class="logon_input_top">
              <span class="spanColorActive">登 录</span>
            </div>
            <div class="logon_input_main">
              <div class="el-input el-input--suffix">
                <input type="text" autocomplete="off" placeholder="账号" class="el-input__inner">
              </div>
              <div class="el-input el-input--suffix">
                <input type="password" autocomplete="off" placeholder="密码" class="el-input__inner">
                <span class="el-input__suffix">
									<span class="el-input__suffix-inner">
									</span>
								</span>
              </div>
              <div class="error_box"></div>
              <button type="button" class="el-button el-button--primary"><span>登 录</span></button>
            </div>
            <div class="logon_others"><span class="logon_others_title">其他登录方式</span>
              <!--              <a class="logon_qq" v-for="(p) in dunionLogins" :href="p.requestAddress">-->
              <!--                <img :src="p.unionImgLog" :alt="p.unionName"></a>-->
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="
							 footer">
      <p> Copyright ©2016-2019
        上海每特教育科技有限公司 版本所有Powered by 蚂蚁课堂 <span></span>沪ICP备18018606号-2</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login"
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .logon .logon_logo {
    display: block;
    width: 1130px;
    height: 100px;
    margin: auto;
    padding-top: 20px;
  }

  .logon .logon_container {
    height: 588px;
    background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2e3028877530620f50043efb01575e3d.jpg) top center no-repeat;
  }

  .logon .logon_container .logon_container_inner {
    position: relative;
    width: 1226px;
    margin: auto;
  }

  .logon .logon_container .logon_input {
    width: 350px;
    padding: 0 30px;
    min-height: 556px;
    background-color: #fff;
    position: absolute;
    top: 32px;
    right: 0;
  }

  .logon .logon_container .logon_input .logon_input_top {
    padding: 27px 0 24px;
    text-align: center;
    font-size: 24px;
    color: #666;
  }

  .logon .logon_container .logon_input .logon_input_top .spanColorActive {
    color: #f56600;
    cursor: pointer;
  }

  .logon .logon_container .logon_input .logon_input_main .el-input {
    height: 48px;
    display: block;
    margin-bottom: 15px;
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
  }

  .logon .logon_container .logon_input .logon_input_main .el-input input {
    height: 48px;
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

  .el-input--suffix .el-input__inner {
    padding-right: 30px;
  }

  .logon .logon_container .logon_input .logon_input_main .el-input {
    height: 48px;
    display: block;
    margin-bottom: 15px;
  }

  .el-input__suffix {
    right: 5px;
    -webkit-transition: all .3s;
    transition: all .3s;
  }

  .el-input__prefix,
  .el-input__suffix {
    position: absolute;
    top: 0;
    -webkit-transition: all .3s;
    height: 100%;
    color: #C0C4CC;
    text-align: center;
  }

  .el-input__suffix,
  .el-tree.is-dragging .el-tree-node__content * {
    pointer-events: none;
  }

  .logon .logon_container .logon_input .logon_input_main .el-button {
    background-color: #ff6700;
    width: 100%;
    height: 50px;
    display: block;
    margin: 14px 0;
    text-align: center;
    font-size: 14px;
    color: #fff;
    border: none;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    outline: 0;
  }

  .logon .logon_container .logon_input .logon_others {
    padding-top: 100px;
    text-align: center;
  }

  .logon .logon_container .logon_input .logon_others .logon_others_title {
    font-size: 14px;
    color: #bbb;
  }

  .logon .logon_container .logon_input .logon_others .logon_others_title::before {
    content: '';
    display: inline-block;
    width: 125px;
    margin-bottom: 5px;
    margin-right: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .logon .logon_container .logon_input .logon_others .logon_others_title::after {
    content: '';
    display: inline-block;
    margin-bottom: 5px;
    width: 125px;
    margin-left: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .logon .logon_container .logon_input .logon_others .logon_qq img {
    height: 50px;
    width: 50px;
    margin: 20px;
  }

  .footer {
    height: 80px;
    padding-top: 100px;
    text-align: center;
    color: #757575;
    font-size: 14px;
    line-height: 30px;
  }
</style>
