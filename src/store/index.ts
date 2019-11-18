import Vue from 'vue';
import Vuex, { ActionTree, MutationTree } from 'vuex';
import { Category } from '@/models/Category';
import Task, { Status } from '@/models/Task';
import uuid from '@/Utils';

Vue.use(Vuex);
export interface State {
  categories: Category[];
  tasks: Task[];
}
const state: State = {
  categories: [],
  tasks: [],
};

const mutations: MutationTree<State> = {
  addCategory(state, payload: { category: Category }) {
    state.categories.push(payload.category);
  },
  addTask(state, payload: { task: Task }) {
    state.tasks.push(payload.task);
  },
  deleteCategory(state, payload: { id: string }) {
    state.categories = state.categories.filter(c => c.id !== payload.id);
  },
  deleteTask(state, payload: { id: string }) {
    state.tasks = state.tasks.filter(t => t.id !== payload.id);
  },
  setStatus(state, payload: { id: string; status: Status }) {
    const task = state.tasks.find(t => t.id === payload.id);
    if (task) task.status = payload.status;
  },
};

const actions: ActionTree<State, State> = {
  registerTask(
    { state, commit },
    payload: { name: string; detail: string; categoryIds: string[] }
  ) {
    commit('addTask', {
      id: uuid(),
      name: payload.name,
      detail: payload.detail,
      categories: state.categories.filter(c => payload.categoryIds.some(pc => pc === c.id)),
      status: Status.WAITING,
    });
  },
  registerCategory({ commit }, payload: { name: string }) {
    commit('addCategory', {
      id: uuid(),
      name: payload.name,
    });
  },
  unregisterTask({ commit }, payload: { id: string }) {
    commit('deleteTask', { id: payload.id });
  },
  unregisterCategory({ state, commit }, payload: { id: string }) {
    if (state.tasks.some(t => t.categories.some(tc => tc.id === payload.id))) return;
    commit('deleteCategory', { id: payload.id });
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
});
