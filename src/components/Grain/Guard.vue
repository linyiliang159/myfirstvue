<template>
  <a-row style="padding-top:30px;background:#fff;">
    <GrainStep :currentStep="0"></GrainStep>
    <a-col :span="24" style="margin-top:50px;text-align:left">
      <a-form :autoFormCreate="(form)=>{this.form = form}">
        <a-row>
          <a-col :span="12">
            <a-form-item
              label='姓名' :labelCol="formItemLayoutLeft.labelCol" :wrapperCol="formItemLayoutLeft.wrapperCol"
              fieldDecoratorId="Name" :fieldDecoratorOptions="{rules: [{ required: true, message: '姓名必填' }]}">
              <a-input autocomplete="off"/>
            </a-form-item>

            <a-form-item
              label='身份证号' :labelCol="formItemLayoutLeft.labelCol" :wrapperCol="formItemLayoutLeft.wrapperCol"
              fieldDecoratorId="IDCard" :fieldDecoratorOptions="{rules: [{ required: true, message: '身份证号必填' }]}">
              <a-input autocomplete="off"/>
            </a-form-item>

            <a-form-item
              label='性别' :labelCol="formItemLayoutLeft.labelCol" :wrapperCol="formItemLayoutLeft.wrapperCol"
              fieldDecoratorId="Sex" :fieldDecoratorOptions="{rules: [{ required: true, message: '性别必填' }]}">
              <a-select placeholder='请选择性别'>
                <a-select-option value='M'>男</a-select-option>
                <a-select-option value='F'>女</a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item
              label='出生年月' :labelCol="formItemLayoutLeft.labelCol" :wrapperCol="formItemLayoutLeft.wrapperCol"
              fieldDecoratorId="Birth">
              <a-date-picker style="width: 100%"/>
            </a-form-item>

            <a-form-item
              label='民族' :labelCol="formItemLayoutLeft.labelCol" :wrapperCol="formItemLayoutLeft.wrapperCol"
              fieldDecoratorId="">
              <a-input autocomplete="off"/>
            </a-form-item>

            <a-form-item
              label='联系方式' :labelCol="formItemLayoutLeft.labelCol" :wrapperCol="formItemLayoutLeft.wrapperCol"
              fieldDecoratorId="">
              <a-input autocomplete="off"/>
            </a-form-item>

            <a-form-item
              label='联系地址' :labelCol="formItemLayoutLeft.labelCol" :wrapperCol="formItemLayoutLeft.wrapperCol"
              fieldDecoratorId="">
              <a-input autocomplete="off"/>
            </a-form-item>
          </a-col>

          <a-col :span="12">
            <a-form-item
              label='车牌' :labelCol="formItemLayoutRight.labelCol" :wrapperCol="formItemLayoutRight.wrapperCol"
              fieldDecoratorId="CarCode" :fieldDecoratorOptions="{rules: [{ required: true, message: '车牌必填' }]}">
              <a-input autocomplete="off"/>
            </a-form-item>

            <a-form-item
              label='IC卡号' :labelCol="formItemLayoutRight.labelCol" :wrapperCol="formItemLayoutRight.wrapperCol"
              fieldDecoratorId="ICCard" :fieldDecoratorOptions="{rules: [{ required: true, message: 'IC卡号必填' }]}">
              <a-input autocomplete="off"/>
            </a-form-item>

            <a-form-item
              label='品种' :labelCol="formItemLayoutRight.labelCol" :wrapperCol="formItemLayoutRight.wrapperCol"
              fieldDecoratorId="ItemCode">
              <a-select placeholder='请选择品种'>
                <a-select-option v-for="item in itemList" :value='item.value'>{{item.name}}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :span="24">
            <a-form-item :labelCol="{span: 4}" :wrapperCol="{span: 12, offset: 12}">
              <a-button type='primary' @click="save">保存</a-button>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-col>
  </a-row>
</template>

<script>
  import GrainStep from './GrainStep'
  import ACol from "ant-design-vue/es/grid/Col";

  const formItemLayoutLeft = {
    labelCol: {span: 4, offset: 8},
    wrapperCol: {span: 12},
  }
  const formItemLayoutRight = {
    labelCol: {span: 4},
    wrapperCol: {span: 12},
  }

  export default {
    data() {
      return {
        formLayout: 'horizontal',
        formItemLayoutLeft,
        formItemLayoutRight,
        itemList:[
          {name:'冬小麦',value:'001'},
          {name:'混合小麦',value:'002'},
          {name:'早籼稻',value:'003'},
          {name:'晚籼稻',value:'004'},
          {name:'玉米',value:'005'},
        ]
      }
    },
    methods: {
      save() {
        this.form.validateFields(
          (err, values) => {
            if (!err) {
              console.info(values)
            }
          },
        )
      }
    },
    components: {
      ACol,
      GrainStep: GrainStep
    }
  }
</script>

<style>

</style>
