<template>
  <a-locale-provider :locale="zh_CN">
    <App />
  </a-locale-provider>
</template>
<script>
  import App from './App'
  import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
  import 'moment/locale/zh-cn';
  export default {
    components: { App },
    data() {
      return {
        zh_CN,
      }
    }
  }
</script>
