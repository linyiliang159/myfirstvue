<template>
  <el-row>
    <el-col :span="2">&nbsp;</el-col>
    <el-col :span="20">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input name="userCode"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" name="pwd"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" name="repwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="2">&nbsp;</el-col>
  </el-row>
</template>
