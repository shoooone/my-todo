<template>
  <div class="home">
    <func-switch-button :mode="mode" @change="onChange"></func-switch-button>
    <input-area :mode="mode"></input-area>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FuncSwitchButton from '@/components/MainPane/FuncSwitchButton.vue';
import Mode from '@/models/Mode';
import InputArea from '@/components/MainPane/InputArea.vue';

@Component({
  components: { FuncSwitchButton, InputArea },
})
export default class ToDoPage extends Vue {
  mode: Mode = Mode.SEARCH;

  onChange(value: number) {
    this.mode = value;
  }
}
</script>
