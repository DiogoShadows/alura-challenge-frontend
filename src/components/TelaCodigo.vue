<template>
  <div class="column">
    <div class="fundo-cores">
      <div class="fundo-preto">
        <div style="padding: 20px;">
          <span
            v-for="(circulo, i) in circulos"
            :key="i"
            class="circle mr-2"
            :style="{ backgroundColor: circulo.cor }"
          />
        </div>
        <textarea
          class="input input-texto"
          style="height: 400px; resize: none;"
          type="text"
        />
      </div>
    </div>
    <button class="button is-link mt-5" style="width: 100%; height: 50px;">
      Visualizar com o hightlight
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TelaCodigo",
  data() {
    return {
      circulos: [
        {
          cor: "red",
        },
        {
          cor: "yellow",
        },
        {
          cor: "green",
        },
      ],
    };
  },
});
</script>

<style scoped>
.fundo-cores {
  background-color: aqua;
  padding: 40px;
  border-radius: 1%;
}

.fundo-preto {
  border-radius: 1%;
  background-color: black;
}

.input-texto {
  background-color: black;
  padding: 50px;
  color: white;
  border: none;
}

.circle {
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

textarea:focus {
  box-shadow: 0 0 0;
}
</style>
