<template>
  <div class="columns is-desktop">
    <div class="column p-5">
      <img alt="Logo alura" src="@/assets/logo.png" id="logo"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped>
    #logo{
        width: 200px;
    }
</style>
