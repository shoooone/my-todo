<template>
  <div class="home">
    <func-switch-button :mode="mode" @change="onChange"></func-switch-button>
    <input-area :mode="mode" @input:keyword="changeKeyword" @submit:keyword="submit"></input-area>
    <div v-for="task in displayTasks" :key="task.id" class="task-board">
      <task-info :task="task"></task-info>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapState } from 'vuex';
import FuncSwitchButton from '@/components/MainPane/FuncSwitchButton.vue';
import Mode from '@/models/Mode';
import InputArea from '@/components/MainPane/InputArea.vue';
import Task from '@/models/Task';
import TaskInfo from '@/components/MainPane/TaskInfo.vue';

@Component({
  computed: {
    ...mapState(['tasks']),
  },
  methods: {
    ...mapActions(['registerTask']),
  },
  components: { FuncSwitchButton, InputArea, TaskInfo },
})
export default class ToDoPage extends Vue {
  mode: Mode = Mode.SEARCH;

  tasks!: Task[];

  registerTask!: (p: { name: string; detail: string; categoryIds: string[] }) => void;

  searchWord = '';

  get displayTasks(): Task[] {
    if (!this.searchWord) return this.tasks;
    return this.tasks.filter(t => t.name.includes(this.searchWord));
  }

  onChange(value: number) {
    this.mode = value;
  }

  changeKeyword(value: string) {
    this.searchWord = value;
  }

  submit(value: string) {
    this.registerTask({
      name: value,
      detail: '',
      categoryIds: [],
    });
  }
}
</script>
