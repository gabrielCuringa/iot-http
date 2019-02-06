<template>
  <div id="app">
    <v-app>
      <h1>{{ msg }}</h1>
      <!-- Point d'entré -->
      <app-dashboard></app-dashboard>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Mini dashboard pour le pilotage de l'ESP 32"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
