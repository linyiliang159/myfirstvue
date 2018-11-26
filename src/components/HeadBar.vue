<template>
  <a-row class="liny-header">
    <a-col :span="21">
      <a-icon class="liny-collapse" @click="toggleCollapsed" :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
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
    <a-col :span="3" style="font-size:16px;line-height:46px;">
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
  import headerStore from '../vuex/stores/HeaderStore'
  export default {
    data() {
      return {
        current: ['mail'],
        theme: 'dark',
      }
    },
    computed:{
      collapsed(){
        return headerStore.state.collapsed;
      },
    },
    methods: {
      toggleCollapsed(){
        headerStore.commit('collapse');
      }
    }
  };
</script>

<style>
  .liny-header {background:#001529;flex:0 0 46px;max-height:46px;overflow:hidden;}
  .liny-collapse{color:white;cursor:pointer;font-size:19px;line-height:46px;float:left;padding:0px 20px}
</style>
