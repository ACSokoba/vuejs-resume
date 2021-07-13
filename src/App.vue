<template >
  <transition name="slide-fade">
    <div class="container-sm app">
      <Header/>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header/Header.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
  },
});
</script>

<style src="./App.scss">
</style>
