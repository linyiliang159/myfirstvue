<template>
  <div class="liny-layout">
    <headBar ref="headBar"></headBar>
    <div class="liny-layout-container">
      <BreadCrumb></BreadCrumb>
      <div class="liny-lauout-content">
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </div>

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import HeadBar from './HeadBar'
  import Footer from './Footer'
  import BreadCrumb from './BreadCrumb'

  export default {
    components: {
      headBar: HeadBar,
      Footer: Footer,
      BreadCrumb: BreadCrumb
    }
  }
</script>

<style>
  .liny-layout-container{margin:0px;overflow-y:auto;flex:auto}
  .liny-lauout-content{margin:15px 15px 0;}
</style>
