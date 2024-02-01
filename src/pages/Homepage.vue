<template>
  <div class="container">
    <div class="header-container">
      <h1 class="header">Houses</h1>
      <Button text="CREATE NEW"></Button>
    </div>
    <div class="search-container">
      <div class="input-group">
        <div class="input-icon-container">
          <img src="../assets/ic_search@3x.png" class="icon" />
          <input type="text" placeholder="Search for a house" />
        </div>
        <div class="selector-container">
          <button
            class="selector"
            :class="{ selected: selectedOption === 'Price' }"
            @click="selectOption('Price')"
          >
            Price
          </button>
          <button
            class="selector"
            :class="{ selected: selectedOption === 'Size' }"
            @click="selectOption('Size')"
          >
            Size
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "HomePage",
  components: {
    Button,
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
    },
  },
  data() {
    return {
      selectedOption: "Price",
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 5vh auto 0;
  width: 65%;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header {
  font-size: 32px;
}

.search-container {
  align-self: flex-start;
  margin-top: 5vh;
  width: 100%;
}

.input-icon-container {
  position: relative;
}

.input-icon-container .icon {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
}

.input-group {
  display: flex;
  align-items: center;
}

.selector-container {
  display: flex;
  margin-left: auto;
}

.selector {
  height: 40px;
  width: 8vw;
  border: none;
  background-color: #c3c3c3;
  color: #ffffff;
  font-weight: bold;
  border-radius: 0;
  cursor: pointer;
}

.selector:first-child {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.selector:last-child {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.selected {
  background-color: #eb5440;
}

input {
  padding-left: 60px;
  border: none;
  height: 40px;
  width: 20vw;
  border-radius: 5px;
  background-color: #e8e8e8;
  color: #000000;
  font-weight: lighter;
}

input::placeholder {
  color: #c3c3c3;
}

input:focus {
  outline: none;
}
</style>
