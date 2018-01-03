<template>
  <section class='task-page'>   
    <h1>Taskboard for project xxx</h1> 
    <!--<ul>
      <li v-for='task in tasks' :key='task.id' v-text='task'>{tasks}</li>
    </ul>-->
    <div class='task-board'>
      <!---->
      <!--<div class='status-container'>
        <h2>To do</h2>
        <draggable v-model='tasks.todo' class='task-container' :options="{}" :element="'div'">
          <div class='task-card' v-for="task in tasks.todo" :key='task.id'>
            <h3>{{ task.name }}</h3>
            <p>{{ task.status }}</p>
          </div>
        </draggable> 
      </div> -->
      <!---->
      <!--<div class='status-container'>
        <h2>In progress</h2>
        <draggable v-model='tasks.progress' class='task-container' :options="{}" :element="'div'">
          <div class='task-card' v-for="task in tasks.progress" :key='task.id'>
            <h3>{{ task.name }}</h3>
            <p>{{ task.status }}</p>
          </div>
        </draggable>
      </div>-->
      <!---->
      <!--<div class='status-container'>
        <h2>Done</h2>
        <draggable v-model='tasks.done' class='task-container' :options="{}" :element="'div'">
          <div class='task-card' v-for="task in tasks.done" :key='task.id'>
            <h3>{{ task.name }}</h3>
            <p>{{ task.status }}</p>
          </div>
        </draggable>
      </div>-->
      
    </div> <!--end of task-board-->   
    <!--<div class='task-card' v-for='task in tasks' :key='task.id' v-on:click='task.show = !task.show'>-->
  </section>
</template>

<script>
// import Projects from './TaskLayout';
import draggable from 'vuedraggable';
import axios from 'axios';
// import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return { 
      tasks: []
    }
  },
  components: {
    // 'app-tasklayout': TaskLayout,
    draggable
  },
  computed: {
    // numbers() {
    //   return this.$store.state.numbers;
    // },
    projects() {
      return this.$store.state.projects;
    },
    // tasks() {
    //   return this.$store.state.tasks[0];
    // },
    // cardinfo() {
    //   return this.$store.state.cardinfo;
    // }
    // tasks: {
    //   get() {
    //     return this.$store.state.tasks;
    //   },
    //   set(value) {
    //     this.$store.commit('updateTasks', value)
    //   }
    // },
    // mapGetters([
    //   'statusOfTasks',
    // ]),
  },
  mounted() {
    axios.get('http://admin.taskboard.app/tasks', {auth: {username: 'anna', password: 'test123'}}).then(response => {
      console.log(response.data)
      this.$set(this._data, 'tasks', response.data)
    });
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

    @include breakpoint(medium) {
      flex-flow: row nowrap;
      align-items: flex-start;
    }
  }

  .status-container {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    // border: 1px solid red;
    flex-grow: 1;
    width: 100%;
  }

  .task-container {
    /*flex-grow: 1;*/
    text-align: center;
    width: 100%;
    max-width: 30rem;
    border: 1px solid blue;
  }

  .task-card {
    background-color: white;
    flex-basis: 15rem;
    padding: 1rem 1rem 2.5rem 1rem;
    box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.03), 
                0 3px 6px 0 rgba(0, 0, 0, 0.03), 
                0 1px 2px 0 rgba(0, 0, 0, 0.10);
    margin: 0.8rem;
    cursor: pointer;
  }

  p {
    transition: opacity 1s ease-out;
  }
</style>