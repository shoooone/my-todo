import Mode from "@/models/Mode"; import Mode from "@/models/Mode"; import Mode from
"@/models/Mode"; import Mode from "@/models/Mode";
<template>
  <div class="input-area">
    <func-switch-button :mode="mode" @change="changeMode"></func-switch-button>
    <div v-if="showSearchArea" class="input-keyword">
      <input
        v-model="keyword"
        type="text"
        placeholder="キーワードを入力してください"
        @input="onInput"
      />
    </div>
    <div v-if="showRegisterArea" class="input-register">
      <input
        v-model="keyword"
        type="text"
        placeholder="タスク名を入力してください"
        @keydown.enter="submitKeyword"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Mode from '@/models/Mode';
import FuncSwitchButton from '@/components/MainPane/FuncSwitchButton.vue';

@Component({
  components: { FuncSwitchButton },
})
export default class InputArea extends Vue {
  @Prop()
  mode!: Mode;

  keyword = '';

  get showSearchArea() {
    return this.mode === Mode.SEARCH;
  }

  get showRegisterArea() {
    return this.mode === Mode.REGISTER;
  }

  changeMode(value: Mode) {
    this.$emit('change:mode', value);
  }

  onInput(ev: any) {
    if (this.mode === Mode.REGISTER) return;
    this.$emit('input:keyword', this.keyword);
  }

  submitKeyword() {
    if (this.mode === Mode.SEARCH) return;
    if (!this.keyword) return;
    this.$emit('submit:keyword', this.keyword);
    this.keyword = '';
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
.input-keyword input {
  background-image: url('../../assets/search-icon.png');
}
.input-register input {
  background-image: url('../../assets/register-icon.png');
}
</style>
