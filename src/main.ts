import { createApp } from "vue";
import App from "./App.vue";
import roteador from "./router";
import store from "./store";

createApp(App)
  .use(store)
  .use(roteador)
  .mount("#app");
