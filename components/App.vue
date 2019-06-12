<template>
  <div id="app">
    <el-button type="primary" @click="openDiag = true"
      >Please submit your information below</el-button
    >
  
    <el-dialog :visible.sync="openDiag">

    </div>
  
</template>

<script>
    import HelloWorld from "./components/HelloWorld.vue";
    export default {
  name: "app",
  components:
  HelloWorld } 
  </script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: blueviolet;
  margin-top: 60px;
  padding: 15px; 
}
</style>
