<template>
  <div id="app">
    <nav>
      <div class="container">
        <h1 class="logo">My Article</h1>
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/read-later">Read Later</router-link>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
nav {
  background-color: #FF6961;
  padding: 15px 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  color: white;
  font-size: 22px;
  font-weight: bold;
}
.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #dfe6e9;
}

.nav-links a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
