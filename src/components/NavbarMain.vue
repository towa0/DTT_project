<template>
  <nav>
    <div class="navbar-content">
      <img
        src="../assets/img_logo_dtt@3x.png"
        alt="DTT Logo"
        class="navbar-logo"
      />
      <router-link
        to="/"
        class="navbar-button"
        :class="{ active: $route.name === 'houses' }"
      >
        Houses
      </router-link>
      <router-link
        to="/about"
        class="navbar-button"
        :class="{ active: $route.name === 'about' }"
      >
        About
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavBar",
};
</script>

<style scoped>
nav {
  position: sticky;
  top: 0;
  background-color: #ffffff;
  height: 8vh;
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
}

.navbar-content {
  width: 65%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.navbar-logo {
  height: 44px;
  margin-right: 15px;
}

.navbar-button {
  text-decoration: none;
  color: #000000;
  border: none;
  background: none;
  margin: 0 15px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
}

.navbar-button.active {
  font-weight: bold;
}
</style>
