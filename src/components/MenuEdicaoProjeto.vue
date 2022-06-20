<template>
  <div class="column is-one-quarter barra">
    <div>
      <h1 class="title is-6">Seu Projeto</h1>
      <div class="mr-5">
        <input
          class="input input-texto"
          type="text"
          placeholder="Nome do projeto"
        />
        <textarea
          class="input input-texto mt-4"
          style="height: 90px; resize: none"
          type="text"
          placeholder="Descricão do seu projeto"
        />
      </div>
    </div>
    <div class="mt-6">
      <h1 class="title is-6">Personalização</h1>
      <div class="mr-5">
        <div class="select" style="width: 100%">
          <select class="input-texto" style="width: 100%">
            <option v-for="(linguagem, i) in linguagens" :key="i">{{
              linguagem.nome
            }}</option>
          </select>
        </div>
        <div class="mt-5">
          <input
            type="color"
            id="colorpicker"
            value="#0000ff"
            style="width:100%; height: 50px;"
          />
        </div>
        <div class="mt-3">
          <button class="button is-link" style="width: 100%; height: 50px;">
            Salvar Projeto
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuEdicaoProjeto",
  data() {
    return {
      linguagens: [
        {
          nome: "Java",
        },
        {
          nome: "JavaScript",
        },
      ],
    };
  },
});
</script>

<style scoped>
.barra {
  display: flex;
  flex-direction: column;
}

.input-texto {
  background-color: rgba(236, 146, 146, 0.16);
  border: 0ch;
  color: white;
  height: 50px;
}

::placeholder {
  color: white;
  opacity: 1;
}
</style>
