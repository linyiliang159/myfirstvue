<template>
  <div class="liny-steps">
    <a-steps :current="currentStep">
      <a-step title="入门登记"></a-step>
      <a-step title="入库化验"></a-step>
      <a-step title="第一次称重"></a-step>
      <a-step title="值仓"></a-step>
      <a-step title="第二次称重"></a-step>
      <a-step title="结算"></a-step>
    </a-steps>
  </div>
</template>

<script>
  export default {
    props: {
      currentStep: Number
    },
    data() {
      return {}
    }
  }
</script>

<style>
  .liny-steps {text-align:left;width:80%;margin:0 auto;}
</style>
