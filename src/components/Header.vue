<template class="cabecalho">
  <div class="columns is-desktop div-centralizado">
    <div class="column p-5 is-one-quarter">
      <img alt="Logo alura" src="@/assets/logo.png" id="logo" />
    </div>
    <div class="column div-centralizado">
      <input
        class="input input-texto"
        type="text"
        placeholder="Busque por algo"
      />
    </div>
    <div class="column is-one-quarter div-centralizado container">
      <img src="@/assets/gato.jpeg" alt="Imagem Usuário" id="imagem-usuario" />
      <b class="ml-3">Nome do Usuário</b>
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

.div-centralizado{
  align-items: center;
  justify-content: center;
  display: flex;
}

#logo {
  width: 200px;
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

#imagem-usuario {
  border-radius: 50%;
  width: 40px;
}
</style>
