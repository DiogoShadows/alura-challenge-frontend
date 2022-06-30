<template>
  <Header />
  <div class="columns">
    <BarraLateral />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import BarraLateral from "./components/BarraLateral.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    BarraLateral,
  },
});
</script>

<style>
html,
body {
  background-color: #051d3b;
  color: white;
}
.title {
  letter-spacing: 3px;
  color: white;
  letter-spacing: 3px;
}
</style>
