<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/demo1">Composition API</router-link> |
    <router-link to="/demo2">Teleport</router-link> |
    <router-link to="/demo3">Fragment</router-link> |
    <router-link to="/demo4">Suspense</router-link> |
    <router-link to="/demo5">v-model</router-link> |
    <router-link to="/demo6">$attrs</router-link> |
    <router-link to="/demo7">Others</router-link> |
    <router-link to="/references">References</router-link>
  </div>
  <div id="teleport-target"></div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 15px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

p {
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 1rem;
  line-height: 1.7em;
}
</style>
