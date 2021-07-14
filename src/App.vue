<template >
  <transition name="slide-fade">
    <div class="container app">
      <Header/>
      <Body/>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header/Header.vue";
import Body from "./components/Body/Body.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Body,
  },
});
</script>

<style src="./App.sass">
</style>
