<template>
  <div class="column is-one-quarter barra pl-6">
    <h6 class="title is-6">Menu</h6>
    <span class="mb-3" v-for="item in itensMenu" :key="item.id">
      <router-link
        :to="item.link"
        @mouseover="item.itemMenuHover = true"
        @mouseleave="item.itemMenuHover = false"
      >
        <div
          :style="[item.itemMenuHover ? { opacity: '85%' } : { opacity: '35%' }]"
        >
          <span class="icon is-large mr-3">
            <ion-icon :name="item.icone" style="color: white;"></ion-icon>
          </span>
          <span style="color: white;">{{ item.texto }}</span>
        </div>
      </router-link>
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
          link: "/",
          itemMenuHover: false,
        },
        {
          id: 2,
          texto: "Sobre",
          icone: "people-outline",
          link: "/comunidade",
          itemMenuHover: false,
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

.icon {
  background-color: #5081FB;
  border-radius: 30%;
}
</style>
