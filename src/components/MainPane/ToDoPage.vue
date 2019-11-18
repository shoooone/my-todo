<template>
  <div class="home">
    <func-switch-button :func-id="funcId"></func-switch-button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
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
}
</script>
