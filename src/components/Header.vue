<template>
  <div class="columns is-desktop">
    <div class="column p-5">
      <img alt="Logo alura" src="@/assets/logo.png" id="logo" />
    </div>
    <div class="column m-10 is-half">
      <input
        class="input input-texto"
        type="text"
        placeholder="Busque por algo"
      />
    </div>
    <div class="column m-10">
            <img
              src="@/assets/logo.png"
              alt="Imagem Usuário"
              class="is-rounded"
              id="imagem-usuario"
            />
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

#imagem-usuario{
  border-color: aliceblue;
  width: 80px;
}
</style>
