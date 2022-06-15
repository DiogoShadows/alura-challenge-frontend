<template>
  <Header/>
  <BarraLateral/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import BarraLateral from './components/BarraLateral.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    BarraLateral
  }
});
</script>

<style>
  html, 
  body{
    background-color: #051D3B;
    color: white;
  }
</style>
