<template>
  <a-modal
    title="登录"
    v-model="visible"
    @ok="handleOk"
    width="30%">
    <!--<component :is="currentView"></component>-->
  </a-modal>
</template>

<script>
  export default {
    data() {
      return {
        visible: true,
        //currentView:null
      };
    },
    methods: {
      showModal() {
        this.visible = true
      },
      handleOk(e) {
        console.log(e);
        this.visible = false
      }
    }
  };
</script>
