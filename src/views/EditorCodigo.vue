<template>
  <TelaCodigo />
  <MenuEdicaoProjeto />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuEdicaoProjeto from "../components/MenuEdicaoProjeto.vue";
import TelaCodigo from "../components/TelaCodigo.vue";

export default defineComponent({
  name: "EditorCodigo",
  components: {
    MenuEdicaoProjeto,
    TelaCodigo,
  },
});
</script>
