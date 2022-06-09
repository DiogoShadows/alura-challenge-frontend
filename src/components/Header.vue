<template>
  <div class="columns is-desktop">
    <div class="column p-5">
      <img alt="Logo alura" src="@/assets/logo.png" id="logo"/>
    </div>
    <div class="column pt-5 is-half">
      <input class="input input-texto" type="text" placeholder="Busque por algo">
    </div>
    <div class="column">
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
    .input-texto{
      background-color: rgba(255, 255, 255, 0.16);
      border: 0ch;
    }

    ::placeholder { 
      color: white;
      opacity: 1; 
    }
</style>
