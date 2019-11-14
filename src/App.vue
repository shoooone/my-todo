<template>
  <div id="app">
    <div id="nav">
      <sideber />
    </div>
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import 'normalize.css';
import { Vue, Component } from 'vue-property-decorator';
import Sideber from './components/Sideber.vue';

@Component({
  components: { Sideber },
})
export default class App extends Vue {}
</script>

<style>
html,
body {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  height: 100%;
}

#nav {
  padding: 30px;
  background: #6c4a71;
}

#main {
  flex-grow: 1;
}
</style>
