<template>
  <div class="side-menu">
    <div class="title"><h1>My ToDo</h1></div>
    <menu-info-row
      v-for="menu in menus"
      :key="menu.to"
      :to="menu.to"
      :name="menu.displayName"
    ></menu-info-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MenuInfoRow from '@/components/SidePane/MenuInfoRow.vue';
import { MenuInfo } from '@/models/MenuInfo';
import { menuList } from '@/router';

@Component({
  components: { MenuInfoRow },
})
export default class SideMenu extends Vue {
  get menus(): MenuInfo[] {
    return menuList;
  }
}
</script>

<style>
.side-menu {
}

div.title {
  background: #432848;
}

h1 {
  color: white;
  font-size: 2em;
  font-weight: bold;
  margin: 0;
  padding: 5px;
}
</style>
