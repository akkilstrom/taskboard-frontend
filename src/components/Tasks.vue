<template>
  <section class='task-page'>   
    <h1>Tasks of {{ selectedProjectName }} </h1> 
    <div class='task-board'>
      <v-tasklayout :tasks='tasksToDo' @task-status-updated="onTaskStatusUpdated" statusType='0' statusText='To do'></v-tasklayout>
      <v-tasklayout :tasks='tasksProgress' @task-status-updated="onTaskStatusUpdated" statusType='1' statusText='In progress'></v-tasklayout>
      <v-tasklayout :tasks='tasksDone' @task-status-updated="onTaskStatusUpdated" statusType='2' statusText='Done'></v-tasklayout>
    </div> <!--end of task-board-->   
    <!-- <v-taskmodal v-if='showModal'></v-taskmodal> -->
    <!-- <button @click='showModal = true'>Visa Modal</button> -->
  </section>
</template>

<script>
import TaskLayout from './TaskLayout';
import draggable from 'vuedraggable';
import axios from 'axios';
import TaskModal from './TaskModal';

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
    'v-tasklayout': TaskLayout,
    'v-taskmodal': TaskModal,
    draggable
  },

  computed: {
    // showModal() {
    //   return this.$store.state.showModal;
    // },
    selectedProject() {
      return this.$store.state.selectedProject;
    },
    selectedProjectName() {
      return this.$store.state.projectName;
    },
    showTaskModal() {
      return this.$store.state.showTaskModal;
    }
  },
  mounted() {
    // http://annakilstrom.nu/taskboard_admin/
    // http://admin.taskboard.app/api/tasks
    // Makes an ajax request to the server fetching tasks
    axios({
      method: 'get',
      url: 'https://annakilstrom.nu/taskboard_admin/api/tasks',
      // auth: { username: 'anna', password: 'test123' }
    }).then(response => {
      console.log('ALL TASKS', response.data)
      this.fetchProjectTasks(response.data);
    })
    .catch((err) =>{
      console.log(err);
    })
  },
  methods: {
    // Fetching the tasks that belongs to the selected project
    fetchProjectTasks(response) {
      response.forEach((task) => {

        if(parseInt(task.project_id) === parseInt(this.selectedProject)) {
          console.log(task);
          this.tasks.push(task);
        }
      });
      this.sortTasks(this.tasks);
    },

    // Depending on the status push to correct array
    sortTasks(tasks) {
      console.log('hej');
      this.tasksToDo = [];
      this.tasksProgress = [];
      this.tasksDone = [];
      tasks.forEach((task) => {
        if(parseInt(task.status) === 0) {
          this.tasksToDo.push(task)
        } 
        if(parseInt(task.status) === 1) {
          this.tasksProgress.push(task) 
        }
        if(parseInt(task.status) === 2) {
          this.tasksDone.push(task) 
        }
      })
    },

    onTaskStatusUpdated(newData){
      console.log('parent', newData, this, this.__data);
      this.tasks.map(task => {
        if(task.id == newData.id) {
          task.status = newData.status;
        }
      });

      this.sortTasks(this.tasks);
      // this.$set(this._data, 'tasks', this.tasks);
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
  width: 90%;
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

  @include breakpoint(medium) {
    flex-flow: row nowrap;
    align-items: flex-start;
  }
}

</style>