<template>
  <Header/>
  <div class="columns">
    <BarraLateral/>
    <TelaCodigo/>
    <MenuEdicaoProjeto/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import BarraLateral from './components/BarraLateral.vue'
import MenuEdicaoProjeto from './components/MenuEdicaoProjeto.vue';
import TelaCodigo from './components/TelaCodigo.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    BarraLateral,
    MenuEdicaoProjeto,
    TelaCodigo
  }
});
</script>

<style>
  html, 
  body{
    background-color: #051D3B;
    color: white;
  }
  .title{
letter-spacing: 3px;
color: white;
    letter-spacing: 3px;
}
</style>
