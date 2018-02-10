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
    selectedProject: null,
    projectName: '',
    // tasks: [],
    selectedTask: null,
    showModal: false
  },
  mutations: {
    setSelectedProject(state, project) {
      state.selectedProject = project;
    },
    setProjectName(state, name){
      state.projectName = name;
    },
    setSelctedTask(state, task) {
      state.selectedTask = task;
    }
  }
  // actions: {
  // Place axios here instead
  // },
  
  // getters: {
  // }
});
  
  
