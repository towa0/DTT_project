<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/NavbarMain.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
