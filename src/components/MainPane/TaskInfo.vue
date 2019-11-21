<template>
  <div class="task-info">
    <div class="task-title">
      <p>{{ task.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Task from '@/models/Task';

@Component
export default class TaskInfo extends Vue {
  @Prop()
  task!: Task;
}
</script>

<style scoped>
div.task-info {
  border: 1px solid darkgrey;
}
div.task-title {
}
p {
  padding-left: 5px;
  font-size: 18px;
  text-align: left;
}
</style>
