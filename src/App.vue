<template >
  <div class="main-container">
    <div class="container app">
      <app-header></app-header>
      <app-body></app-body>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script lang="ts">
import Header from "./components/Header/Header.vue";
import Body from "./components/Body/Body.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    'app-header': Header,
    'app-body': Body,
    'app-footer': Footer,
  },
};
</script>

<style src="./App.sass">
</style>
