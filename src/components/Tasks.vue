<template>
  <section class='task-page'>   
    <h1>Tasks of '{{ selectedValue }}' </h1> 
    <div class='task-board'>
      <app-tasklayout :tasks='tasks' statusText='To do'></app-tasklayout>
      <app-tasklayout :tasks='tasks' statusText='In progress'></app-tasklayout>
      <app-tasklayout :tasks='tasks' statusText='Done'></app-tasklayout>
    </div> <!--end of task-board-->   
    <!--<div class='task-card' v-for='task in tasks' :key='task.id' v-on:click='task.show = !task.show'>-->
  </section>
</template>

<script>
import TaskLayout from './TaskLayout';
import draggable from 'vuedraggable';
import axios from 'axios';
// import { mapGetters, mapActions } from 'vuex';
// import Store from '@/store/store.js';
// import { mapState } from 'vuex'

export default {
  name: 'Tasks',
  props: ['selectedValue'],
  data() {
    return { 
      tasks: [],
      // tasksToDo: [],
      // tasksProgress: [],
      // tasksDone: [],
    }
  },
  // computed: {
  //   tasksTodo() {
  //     return this.$store.getters.tasksTodo
  //   } 
  // },
  components: {
    'app-tasklayout': TaskLayout,
    draggable
  },
  // mounted: function () {
  //   this.$store.dispatch('fetchTasks');
  // },
  mounted() {
    axios.get('http://admin.taskboard.app/api/tasks', {
      auth: {username: 'anna', password: 'test123'}})
      .then(response => {
        console.log(response.data)
        this.$set(this._data, 'tasks', response.data)
    })
  }
};
</script>

<style lang='scss' scoped>
/*BEHÖVS DENNA IMPORTERAS 2 GGR*/
  @import '../assets/scss/mixins.scss';
  @import '../assets/scss/variables.scss';
  .task-page {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    /*justify-content: center;*/
    width: 100%;
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 0 4rem 0;
    box-sizing: border-box;
    /*border: 3px solid orange;*/
    /*border: 1px solid red;*/
  }

  .task-board {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    // border: 3px solid green;
    padding: 0 0.4rem;


    @include breakpoint(medium) {
      flex-flow: row nowrap;
      align-items: flex-start;
    }
  }

</style>