<template>
    <div class="column is-one-quarter barra ml-5">
      <h6 class="title is-6">Menu</h6>
      <span class="mb-3" v-for="item in itensMenu" :key="item.id">
        <span class="icon is-large mr-3">
          <ion-icon :name="item.icone"></ion-icon>
        </span>
        <span>{{ item.texto }}</span>
      </span>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarraLateral",
  data() {
    return {
      itensMenu: [
        {
          id: 1,
          texto: "Editor de código",
          icone: "code-slash-outline",
        },
        {
          id: 2,
          texto: "Sobre",
          icone: "people-outline",
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

.icon{
    background-color: rgb(110, 110, 255);
    border-radius: 30%;
}
</style>
