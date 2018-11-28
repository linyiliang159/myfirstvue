<template>
  <div :class="style">
    <div class="liny-logo" v-if="collapsed"><img src="../assets/logo.png" height="35px"></div>
    <div class="liny-logo" v-else>智慧粮库管理系统</div>
    <a-menu :defaultSelectedKeys="['1']"
            mode="inline"
            :theme="theme"
            :selectedKeys="[current]"
            @click="handleClick" :inlineCollapsed="collapsed"
    >
      <a-menu-item key="1">
        <router-link to="/RotationPlan">
          <a-icon type="mail"/>
          <span>菜单1</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/rkdj">
          <a-icon type="calendar"/>
          <span>入库登记</span>
        </router-link>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="appstore"/><span>菜单3</span></span>
        <a-menu-item key="3">子菜单 1</a-menu-item>
        <a-menu-item key="4">子菜单 2</a-menu-item>
        <a-sub-menu key="sub1-2" title="Submenu">
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="setting"/><span>菜单4</span></span>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
  import headerStore from '../vuex/stores/HeaderStore'

  export default {
    data() {
      return {
        current: '1',
        theme: 'dark',
      }
    },
    computed: {
      collapsed() {
        return headerStore.state.collapsed;
      },
      style() {
        return this.collapsed ? 'liny-layout liny-layout-side liny-side-collapsed' : 'liny-layout liny-layout-side ';
      }
    },
    methods: {
      handleClick(e) {
        this.current = e.key
      },
    },
  }

</script>


<style>
  .liny-layout-side{background-color:#001529;flex:0 0 256px;width:256px;}
  .liny-side-collapsed{flex:0 0 80px;width:80px;}
  .liny-logo{height:46px;color:#fff;line-height:46px;font-size:24px;background-color:#357fc4;text-align:center;overflow:hidden;}
</style>
