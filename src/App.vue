<template>
  <div id="app" style="height:100%">
    <headBar ref="headBar"></headBar>
    <div class="liny-layout-side">
      <sideBar :collapsed="true" ref="sideBar"></sideBar>
    </div>
    <div class="liny-layout-main">
      <Main></Main>
    </div>
    <!--<diaLog ref="diaLog"></diaLog>-->
  </div>
</template>

<script>
  import HeadBar from './components/HeadBar'
  import SideBar from './components/SideBar'
  import TableTest from './components/TableTest'
  import Main from './components/Main'

  export default {
    name: 'App',
    components: {
      headBar: HeadBar,
      sideBar: SideBar,
      tableTest: TableTest,
      Main: Main
    }
  }
</script>


<style>
  #app {
    font-family:'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    text-align:center;
    color:#2c3e50;
    margin-top:0px;
  }
  .liny-layout-side {float:left;padding-top:42px;background:#001529;height:100%;}
  .liny-layout-main {margin-left:270px;padding:46px 10px 0px 0px;}

</style>
