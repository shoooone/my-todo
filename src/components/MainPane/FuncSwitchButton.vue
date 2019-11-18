<template>
  <div class="func-switch-btn">
    <input v-model="funcId" type="radio" value="0" />
    <input v-model="funcId" type="radio" value="1" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FuncSwitchButton extends Vue {
  @Prop()
  funcId!: number;
}
</script>

<style scoped></style>
