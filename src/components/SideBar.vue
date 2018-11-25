<template>
  <div style="text-align:left;">
    <a-menu :style="style"
            :defaultSelectedKeys="['1']"
            mode="inline"
            :theme="theme"
            :selectedKeys="[current]"
            @click="handleClick" :inlineCollapsed="collapsed"
    >
      <a-menu-item key="1">
        <router-link to="/home">
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
  export default {
    props: {
      collapsed: {
        type: Boolean,
        default: false
      }
    },
    computed:{
      style(){
        return this.collapsed?'':'width:256px;';
      }
    },
    data() {
      return {
        current: '1',
        theme: 'dark'
      }
    },
    methods: {
      handleClick(e) {
        this.current = e.key
      },
    },
  }

</script>
