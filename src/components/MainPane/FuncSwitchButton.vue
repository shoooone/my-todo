<template>
  <div class="func-switch-btn">
    <div><input v-model="funcMode" type="radio" value="0" /><label>検索</label></div>
    <div><input v-model="funcMode" type="radio" value="1" /><label>登録</label></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FuncSwitchButton extends Vue {
  @Prop()
  mode!: number;

  get funcMode() {
    return this.mode;
  }

  set funcMode(value: any) {
    this.$emit('change', +value);
  }
}
</script>

<style scoped>
.func-switch-btn {
  display: flex;
  border: 1px solid darkgrey;
  border-radius: 3px;
}
.func-switch-btn > div {
  position: relative;
  flex: 1;
}
input {
  width: 100%;
  height: 60px;
  opacity: 0;
}
input:checked + label {
  background: #6c4a71;
  color: white;
}
label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-right: 1px solid black;
  align-items: center;
  justify-content: center;
  display: flex;
}
.func-switch-btn > div:last-child label {
  border-right: 0;
}
</style>
