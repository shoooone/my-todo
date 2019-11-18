<template>
  <div id="app">
    <div id="nav">
      <side-menu />
    </div>
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import 'normalize.css';
import { Vue, Component } from 'vue-property-decorator';
import SideMenu from './components/SidePane/SideMenu.vue';

@Component({
  components: { SideMenu },
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
  width: 240px;
  background: #6c4a71;
}

#main {
  flex-grow: 1;
}
</style>
