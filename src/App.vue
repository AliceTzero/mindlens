<template>
  <div id="app">
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/button">Button</router-link>
    <router-link to="/popup">Popup</router-link>
    <router-link to="/help">Help</router-link>
    <router-view />
    </div>
  </div>
</template>

<script>



export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  font-size: 16px;
}

#nav {
  width: 40%;
  min-width: 500px;
  margin: 0 auto;
  position: relative;
}

#nav>a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 1em;
}

#nav>a:hover, #nav>a.router-link-active {
  border-bottom: 2px solid #3498db;
}

</style>
