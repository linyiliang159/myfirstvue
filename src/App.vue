<template>
  <div class="liny-layout liny-layout-has-sider">
    <sideBar ref="sideBar"></sideBar>
    <Main></Main>
  </div>
</template>

<script>
  import SideBar from './components/SideBar'
  import TableTest from './components/TableTest'
  import Main from './components/Main'

  export default {
    name: 'App',
    components: {
      sideBar: SideBar,
      tableTest: TableTest,
      Main: Main
    }
  }
</script>


<style>
  .liny-layout{background:#f0f2f5;height:100%;display:flex;flex:auto;flex-direction:column;box-sizing:border-box;}
  .liny-layout-has-sider{flex-direction:row;}
</style>
