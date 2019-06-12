<template>
  <div id="app">
    <claimform />
  </div>
</template>

<script>
import form from "./components/form.vue";

export default {
  name: "app",
  components: {
    claimform: form
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
