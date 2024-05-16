<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>


export default {
  name: "App",
  components: {
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

nav {
    justify-content: center; 
    align-items: center; 
    width: 100%; 
    
}

nav a {
    margin: 0 2cap; 
    font-weight: 700;
    text-decoration: none; 
    color: #42b983;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

main {
  padding-top: 4em;
}
</style>
