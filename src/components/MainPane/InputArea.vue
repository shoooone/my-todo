<template>
  <div class="input-area">
    <input type="text" :placeholder="placeholder" :class="classForIcon" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Mode from '@/models/Mode';

@Component
export default class InputArea extends Vue {
  @Prop()
  mode!: Mode;

  get placeholder() {
    switch (this.mode) {
      case Mode.SEARCH:
        return 'キーワードを入力してください';
      case Mode.REGISTER:
        return 'タスク名を入力してください';
      default:
        return '';
    }
  }

  get classForIcon() {
    switch (this.mode) {
      case Mode.SEARCH:
        return 'search';
      case Mode.REGISTER:
        return 'register';
      default:
        return '';
    }
  }
}
</script>

<style scoped>
input {
  background-repeat: no-repeat;
  height: 50px;
  width: 100%;
  padding-left: 50px;
}
input.search {
  background-image: url('../../assets/search-icon.png');
}
input.register {
  background-image: url('../../assets/register-icon.png');
}
</style>
