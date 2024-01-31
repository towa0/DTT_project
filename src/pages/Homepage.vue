<template>
  <div class="container">
    <h1 class="header">Houses</h1>
    <Button text="CREATE NEW"></Button>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "HomePage",
  components: {
    Button,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  margin: 5vh auto 0;
  width: 65%;
}

.header {
  font-size: 32px;
}
</style>
