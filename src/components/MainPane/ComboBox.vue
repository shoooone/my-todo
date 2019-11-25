<template>
  <div class="combo-box">
    <select id="" name="combo-box">
      <option v-for="option in options" :key="option.name" :value="option.value">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export interface Option {
  name: string;
  value: string;
}

@Component
export default class ComboBox extends Vue {
  @Prop()
  options!: Option[];
}
</script>

<style scoped></style>
