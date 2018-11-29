<template>
  <a-row class="liny-header">
    <a-col :span="21">
      <a-icon class="liny-collapse" @click="toggleCollapsed" :type="collapsed ? 'menu-unfold' : 'menu-fold'"/>
      <a-menu v-model="current" :theme="theme" mode="horizontal">
        <a-menu-item v-for="item in moduleList" :key="item.moduleCode">
          <a-icon type="mail"/>
          {{item.moduleName}}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col :span="3" style="font-size:16px;line-height:46px;">
      <a-dropdown>
        <a class="ant-dropdown-link" href="javascript:;">
          欢迎：administrator
          <a-icon type="down"/>
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
        current: [],
        theme: 'dark',
        moduleList: []
      }
    },
    mounted() {
      //加载完成后，取模块数据(先从localstorage取)
      let modules = this.LocalStorageHelper.getLocalStorageItem('modules');
      if (modules) {
        this.moduleList = modules;
        this.current = [modules[0].moduleCode];
      } else {
        this.httpGet('/api/services/app/sys_Module/GetPaged', (res) => {
          this.LocalStorageHelper.setLocalStorageItem('modules', res.items);
          this.moduleList = res.items;
          this.current = [res.items[0].moduleCode];
        })
      }
    },
    computed: {
      collapsed() {
        return headerStore.state.collapsed;
      },
    },
    methods: {
      toggleCollapsed() {
        headerStore.commit('collapse');
      }
    }
  };
</script>

<style>
  .liny-header{background:#001529;flex:0 0 46px;max-height:46px;overflow:hidden;}
  .liny-collapse{color:white;cursor:pointer;font-size:19px;line-height:46px;float:left;padding:0px 20px}
</style>
