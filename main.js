import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";

Vue.use(Element, {
  locale
});

var app = new Vue({
  el: "#app"
});
