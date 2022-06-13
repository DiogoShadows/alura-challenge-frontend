<template class="cabecalho">
  <div class="columns is-desktop">
    <div class="column p-5">
      <img alt="Logo alura" src="@/assets/logo.png" id="logo" />
    </div>
    <div class="column is-half">
      <input
        class="input input-texto"
        type="text"
        placeholder="Busque por algo"
      />
    </div>
    <div class="column teste container">
      <img src="@/assets/logo.png" alt="Imagem Usuário" id="imagem-usuario" />
      <b>Nome do Usuário</b>
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
.cabecalho {
  top: 0;
  height: 150px;
  align-items: center;
  display: flex;
}

.teste{
  align-items: center;
  display: flex;
}

#logo {
  width: 200px;
}
.input-texto {
  background-color: rgba(236, 146, 146, 0.16);
  border: 0ch;
  color: white;
  margin-top: 25px;
}

::placeholder {
  color: white;
  opacity: 1;
}

#imagem-usuario {
  border-style: solid;
  border-color: aliceblue;
  border-radius: 50%;
  width: 80px;
}
</style>
