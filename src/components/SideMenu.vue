<template>
  <div class="side-menu">
    <div class="title"><h1>My ToDo</h1></div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SideMenu extends Vue {}
</script>

<style>
.side-menu {
  width: 100%;
  height: 100%;
}

div.title {
  width: 100%;
  height: 120px;
  background: #432848;
}

h1 {
  color: white;
  font-size: 2em;
  font-weight: bold;
}

a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
