<template>
  <el-row>
    <el-col :span="2">&nbsp;</el-col>
    <el-col :span="18">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.UserCode"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.PassWord"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="4">&nbsp;</el-col>
  </el-row>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        form: {
          UserCode: '',
          PassWord: ''
        }
      }
    },
    methods: {
      login() {
        let _this = this;
        axios.post('http://localhost:55824/api/Account/Login', this.form)
          .then(function (res) {
            if (res.data.ResultMsg == '登录成功') {
              _this.$parent.$parent.hideHandle();
              _this.$parent.$parent.$parent.$refs.headBar.loginFlag==true;
            }
            else {

            }
          })
          .catch(function (err) {
            console.log(err);
          })
      }
    }
  };
</script>
