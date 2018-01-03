import Vue from 'vue';
import Vuex from 'vuex';
import draggable from 'vuedraggable';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // TODO: fetch data from backend
    numbers: [ 1, 2, 3, 4, 5 ],
    logo: 'The Taskboard',
    copyright: 'Copyright 2017',
    cardinfo: 'move me to change status',
    projects: [
      { name: 'project 1', client: 'xxx' },
      { name: 'project 2', client: 'yyy' },
      { name: 'project 3', client: 'xxx' },
    ],
    tasks: [{ 
      todo: [
        {
          name: 'task1',
          priority: 'high',
          desc: 'Lorem ipsum dolor sit amet, ut felis massa magna ut, egestas egestas est auctor fermentum',
          show: false,
          status: 'to do',
        },
        { 
          name: 'task2',
          priority: 'low',
          desc: 'Lorem ipsum dolor sit amet, ut felis massa magna ut, egestas egestas est auctor fermentum',
          show: false,
          status: 'to do',
        }
      ],
      progress: [
        {
          name: 'task3',
          priority: 'low',
          desc: 'Lorem ipsum dolor sit amet, ut felis massa magna ut, egestas egestas est auctor fermentum',
          show: false,
          status: 'progress',
        },
        {
          name: 'task4',
          priority: 'high',
          desc: 'Lorem ipsum dolor sit amet, ut felis massa magna ut, egestas egestas est auctor fermentum',
          show: false,
          status: 'progress',
        }
      ], 
      done: [
        {
          name: 'task5',
          priority: 'low',
          desc: 'Lorem ipsum dolor sit amet, ut felis massa magna ut, egestas egestas est auctor fermentum',
          show: false,
          status: 'done',
        },
        {
          name: 'task6',
          priority: 'high',
          desc: 'Lorem ipsum dolor sit amet, ut felis massa magna ut, egestas egestas est auctor fermentum',
          show: false,
          status: 'done',
        },
        {
          name: 'task7',
          priority: 'high',
          desc: 'Lorem ipsum dolor sit amet, ut felis massa magna ut, egestas egestas est auctor fermentum',
          show: false,
          status: 'done',
        }
      ]
    }],
  },
  // actions: {
    
  // },

  // getters: {
  
  // },

  // mutations: {
  //   //TODO:Implement mutations
  // },
});

// const getters = {
//   sortTasks
//   fetchTasks
// };

// const mutations = {
//   increment (state) {
//     state.count++;
//   },

//   decrement(state) {
//     state.count --;
//   }
// };

// const actions = {
//   increment: ({ commit }) => commit( 'increment' ),
//   decrement: ({ commit }) => commit( 'decrement' ),
//   incrementIfOdd: ({ commit, state }) => {
//     if( (state.count + 1 ) % 2 === 0) {
//       commit( 'increment' );
//     }
//   },
//   incrementAsync: ({ commit }) => {
//     return new Promise(( response, reject) => {
//       setTimeout(() => {
//         commit('increment'),
//         resolve()
//       }, 1000 )
//     })
//   }
// };



