<template>
  <div class="home">
    <func-switch-button :mode="mode" @change="onChange"></func-switch-button>
    <input-area :mode="mode" @input:keyword="changeKeyword" @submit:keyword="submit"></input-area>
    <div class="task-board"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import FuncSwitchButton from '@/components/MainPane/FuncSwitchButton.vue';
import Mode from '@/models/Mode';
import InputArea from '@/components/MainPane/InputArea.vue';

@Component({
  computed: {
    ...mapState('', {
      tasks: state => (state as any).tasks,
    }),
  },
  components: { FuncSwitchButton, InputArea },
})
export default class ToDoPage extends Vue {
  mode: Mode = Mode.SEARCH;

  onChange(value: number) {
    this.mode = value;
  }

  changeKeyword(value: string) {
    console.log(value);
  }

  submit(value: string) {
    console.log(`submit:${value}`);
  }
}
</script>
