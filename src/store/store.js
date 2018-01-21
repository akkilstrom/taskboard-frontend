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
  },
  mutations: {
    setSelectedProject(state, project) {
      state.selectedProject = project;
    },
    setProjectName(state, name){
      state.projectName = name;
    }
  }
  // actions: {
  // Place axios here instead
  // },
  
  // getters: {
  // }
});
  
  
