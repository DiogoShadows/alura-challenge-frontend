<template>
  <div class="column">
    <div class="fundo">
      <textarea
        class="input input-texto"
        style="height: 400px; resize: none; width: 100%;"
        type="text"
        placeholder="Descricão do seu projeto"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TelaCodigo",
});
</script>

<style scoped>
.fundo {
  background-color: aqua;
  padding: 40px;
  border-radius: 1%;
}

.input-texto {
  background-color: black;
  padding: 50px;
  color: white;
  height: 50px;
  border-radius: 1%;
}
</style>
