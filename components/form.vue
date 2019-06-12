<template>
  <div class="form">
    <!-- adding Element-UI Form -->
    <el-form :model="claims" :rules="rules" red="Form">
    <el-form-item label="First Name" prop="name"
      ><el-input placeholder="Enter Your First Name here" v-model
      ="Form.name"</el-form-item
    >
  </div>
</template>
