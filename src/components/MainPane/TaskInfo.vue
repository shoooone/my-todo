<template>
  <div class="task-info"></div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator';
import Task from '@/models/Task';

export default class TaskInfo extends Vue {
  @Prop()
  task!: Task;
}
</script>

<style scoped></style>
