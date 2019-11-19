<template>
  <div class="home">
    <func-switch-button :func-id="funcId" @change="onChange"></func-switch-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FuncSwitchButton from '@/components/MainPane/FuncSwitchButton.vue';

@Component({
  components: { FuncSwitchButton },
})
export default class ToDoPage extends Vue {
  funcId = 0;

  onChange(value: number) {
    this.funcId = value;
  }
}
</script>
