<template>
  <div>
    <BreadCrumb></BreadCrumb>
    <div class="liny-layout-container">
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './Footer'
  import BreadCrumb from './BreadCrumb'

  export default {
    components: {
      Footer: Footer,
      BreadCrumb: BreadCrumb
    }
  }
</script>

<style>
  .liny-layout-container {margin:0px;height:600px;overflow-y:auto;}
</style>
