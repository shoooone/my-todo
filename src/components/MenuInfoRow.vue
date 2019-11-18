<template>
  <div class="menu-info-raw">
    <router-link :to="to">{{ name }}</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MenuInfoRow extends Vue {
  @Prop()
  to!: string;

  @Prop()
  name!: string;
}
</script>

<style scoped>
div.menu-info-raw {
  width: 100%;
}
a {
  display: block;
  text-decoration: none;
  font-size: 1.5em;
  color: white;
  padding: 5px;
}
a:hover {
  opacity: 0.5;
}
a.router-link-exact-active {
  background: #534aa0;
  pointer-events: none;
  cursor: default;
}
</style>
