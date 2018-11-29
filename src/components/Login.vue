<template>
  <a-row>
    <a-col :span="8">&nbsp;</a-col>
    <a-col :span="8">
      <a-form :autoFormCreate="(form)=>{this.form = form}" class="login-container">
        <h2 align="center">登录</h2>
        <a-form-item fieldDecoratorId="UserName"
                     :fieldDecoratorOptions="{rules: [{ required: true, message: '用户名不能为空!' }]}">
          <a-input placeholder='用户名'>
            <a-icon slot="prefix" type='user' style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>

        <a-form-item fieldDecoratorId="PassWord"
                     :fieldDecoratorOptions="{rules: [{ required: true, message: '密码不能为空!' }]}">
          <a-input type='password' placeholder='密码'>
            <a-icon slot="prefix" type='lock' style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>

        <a-form-item>
          <a-checkbox>记住密码</a-checkbox>
          <a class='login-form-forgot' href=''>忘记密码</a>
          <a-button type='primary' @click="handleSubmit" :loading="iconLoading" class='login-form-button'>
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </a-col>
    <a-col :span="8">&nbsp;</a-col>
  </a-row>

</template>

<script>
  import MenuUtils from '@/utils/MenuUtils'

  let routes = [];

  let menus = [
    {path: '/RotationPlan', component: 'Grain/RotationPlan', name: 'RotationPlan', leaf: true},
    {path: '/HelloWorld', component: 'HelloWorld', name: 'HelloWorld', leaf: true},
    {path: '/Guard', component: 'Grain/Guard', name: 'Guard', leaf: true},
    {path: "/menuThree", component: 'HelloWorld', name: '导航3', leaf: true}
  ];


  export default {
    data() {
      return {
        iconLoading: false,
        loginForm: {
          username: 'admin',
          password: 'admin'
        },
      }
    },
    methods: {
      login(data) {
        window.sessionStorage.setItem('user', JSON.stringify(data))
        MenuUtils(routes, data)
      },
      handleSubmit() {
        this.form.validateFields(
          (err, values) => {
            if (!err) {
              this.iconLoading = true;
              this.login(menus);
              this.$router.options.routes[0].children = routes;
              this.$router.addRoutes(this.$router.options.routes);
              this.$router.push({path: '/'});
            }
          },
        )
      }
    }
  };
</script>


<style>
  .login-container{
    -webkit-border-radius:5px;
    border-radius:5px;
    -moz-border-radius:5px;
    background-clip:padding-box;
    margin-bottom:20px;
    background-color:#F9FAFC;
    margin:180px auto;
    border:2px solid #8492A6;
    width:350px;
    padding:25px 35px 15px 35px;
  }
  .login-form-forgot{float:right;}
  .login-form-button{width:100%;}
</style>
