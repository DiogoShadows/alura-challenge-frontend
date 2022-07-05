<template>
  <div class="column is-one-quarter barra pl-6">
    <h6 class="title is-6">Menu</h6>
    <span class="mb-3" v-for="item in itensMenu" :key="item.id">
      <router-link
        :to="item.link"
        @mouseover="item.itemMenuHover = true"
        @mouseleave="item.itemMenuHover = false"
        @click="botaoClickado(item)"
      >
        <div
          :style="[
            item.focado
              ? { opacity: '100%' }
              : item.itemMenuHover
              ? { opacity: '60%' }
              : { opacity: '35%' },
          ]"
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
import { useRouter } from "vue-router";

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
          focado: false,
        },
        {
          id: 2,
          texto: "Sobre",
          icone: "people-outline",
          link: "/comunidade",
          itemMenuHover: false,
          focado: false,
        },
      ],
    };
  },
  
  created() {
    const router = useRouter()
    this.itensMenu.find(x => x.link == router.currentRoute.value.fullPath).focado = true;
  },

  methods: {
    botaoClickado(item) {
      this.itensMenu.forEach((x) => (x.focado = false));
      item.focado = true;
    },
  },
});
</script>

<style scoped>
.barra {
  display: flex;
  flex-direction: column;
}

.icon {
  background-color: #5081fb;
  border-radius: 30%;
}
</style>
