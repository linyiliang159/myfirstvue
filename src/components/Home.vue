<template>
  <div class="liny-layout liny-layout-has-sider">
    <sideBar ref="sideBar"></sideBar>
    <Main></Main>
  </div>
</template>

<script>
  import SideBar from './SideBar'
  import Main from './Main'

  export default {
    components: {
      sideBar: SideBar,
      Main: Main
    }
  }
</script>


<style>
  .liny-layout{background:#f0f2f5;height:100%;display:flex;flex:auto;flex-direction:column;box-sizing:border-box;}
  .liny-layout-has-sider{flex-direction:row;}
</style>
