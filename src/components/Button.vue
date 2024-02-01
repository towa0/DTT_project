<template>
  <button class="button">
    <img src="../assets/ic_plus_white@3x.png" alt="Icon" class="button-icon" />
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    text: String,
  },
};
</script>

<style scoped>
.button {
  height: 44px;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-left: auto;
  background-color: #eb5440;
  font-weight: bold;
  color: white;
  border: none;
  padding-left: 20px;
  padding-right: 26px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 8px;
  cursor: pointer;
}

.button-icon {
  margin-right: 18px;
  height: 18px;
  width: 18px;
}
</style>
