import Vue from 'vue';
import Vuex from 'vuex';
// import draggable from 'vuedraggable';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logo: 'The Taskboard',
    copyright: 'Copyright 2017',
    cardinfo: 'move me to change status',
    // tasks: [],
  },
  // actions: {
  //   fetchAllTasks( { commit }) {
  //     axios.get('http://admin.taskboard.app/api/tasks', {
  //       auth: {username: 'anna', password: 'test123'}
  //     })
  //     .then(response => {
  //       commit('setTasks', { list: response.data })
  //     });
  //   }
  // },
  // mutations: {
  //   setTasks: (state, { list }) => {
  //     state.tasks = list
  //   },
  // },
  // getters: {
  //   tasksTodo: state => { 
  //     return state.tasks.filter(task => task.status === 0);
  //   },
  //   tasksInProgress: state => {
  //     return state.tasks.filter(task => task.status === 1);
  //   },
  //   tasksDone: state => {
  //     return state.tasks.filter(task => task.status === 2);
  //   }
  // }
});
  
  
