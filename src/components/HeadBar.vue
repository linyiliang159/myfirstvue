<template>
  <a-row class="header">
    <a-col :span="20">
      <div class="liny-header-logo"><a-icon type="cloud-download-o" />Ant</div>
      <div style="float: left;line-height:44px;margin:0 20px;">
        <a-button type="primary" @click="toggleCollapsed">
          <a-icon :type="true ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
      </div>
      <a-menu
        v-model="current" :theme="theme"
        mode="horizontal"
      >
        <a-menu-item key="mail">
          <a-icon type="mail"/>出入库管理
        </a-menu-item>
        <a-menu-item key="app">
          <a-icon type="appstore"/>粮情仓储
        </a-menu-item>
        <a-sub-menu>
          <span slot="title"><a-icon type="setting"/>Navigation Three - Submenu</span>
          <a-menu-item-group title="Item 1">
            <a-menu-item key="setting:1">Option 1</a-menu-item>
            <a-menu-item key="setting:2">Option 2</a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group title="Item 2">
            <a-menu-item key="setting:3">Option 3</a-menu-item>
            <a-menu-item key="setting:4">Option 4</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-menu-item key="alipay">
          <a-icon type="appstore"/>系统管理
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col :span="4" style="font-size:16px;color:#fff;line-height:46px;">
      <a-dropdown>
        <a class="ant-dropdown-link" href="javascript:;" >
          欢迎：administrator <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">登出</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">修改密码</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">个人设置</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </a-col>
  </a-row>
</template>

<script>
  import ACol from "ant-design-vue/es/grid/Col";
  export default {
    components: {ACol},
    data() {
      return {
        current: ['mail'],
        theme: 'dark',
      }
    },
    methods: {
      toggleCollapsed(){

      }
    }
  };
</script>

<style>
  .header {background:#001529;position:absolute;top:0;width:100%;}
  .liny-header-logo{font-size:26px;color:#fff;line-height:46px;background:#1890ff;width:256px;float:left;}
</style>
