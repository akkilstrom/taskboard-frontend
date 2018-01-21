<template>
  <section class='task-page'>   
    <h1>Tasks of {{ selectedProjectName }} </h1> 
    <div class='task-board'>
      <app-tasklayout :tasks='tasksToDo' statusText='To do'></app-tasklayout>
      <app-tasklayout :tasks='tasksProgress' statusText='In progress'></app-tasklayout>
      <app-tasklayout :tasks='tasksDone' statusText='Done'></app-tasklayout>
    </div> <!--end of task-board-->   
    <!--<div class='task-card' v-for='task in tasks' :key='task.id' v-on:click='task.show = !task.show'>-->
  </section>
</template>

<script>
import TaskLayout from './TaskLayout';
import draggable from 'vuedraggable';
import axios from 'axios';

export default {
  name: 'Tasks',
  data() {
    return { 
      tasks: [],
      tasksToDo: [],
      tasksProgress: [],
      tasksDone: [],
    }
  },
  components: {
    'app-tasklayout': TaskLayout,
    draggable
  },

  computed: {
    selectedProject() {
      return this.$store.state.selectedProject;
    },
    selectedProjectName() {
      return this.$store.state.projectName;
    }
  },
  mounted() {
    // http://annakilstrom.nu/taskboard_admin/
    axios.get('http://admin.taskboard.app/api/tasks', {
      auth: {username: 'anna', password: 'test123'}})
      .then(response => {
        console.log(response.data)
        this.fetchProjectTasks(response.data);
    })
  },
  methods: {
    // Fetching the tasks that belongs to the selected project
    fetchProjectTasks(response) {
      response.forEach((task) => {
        if(task.project_id === this.selectedProject)
        this.tasks.push(task);
      });
      this.sortTasks(this.tasks);
    },

    // Depending on the status push to correct array
    sortTasks(tasks) {
      tasks.forEach((task) => {
        if(task.status === 0) {
          this.tasksToDo.push(task)
        } 
        if(task.status === 1) {
          this.tasksProgress.push(task) 
        }
        if(task.status === 2) {
          this.tasksDone.push(task) 
        }
      })
    }
  }
};
</script>

<style lang='scss' scoped>
  @import '../assets/scss/style.scss';
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
  }

  .task-board {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    padding: 0 0.8rem;

    @include breakpoint(medium) {
      flex-flow: row nowrap;
      align-items: flex-start;
      padding: 0 0.4rem;
    }
  }

</style>