<template>
  <section class='task-page'>   
    <h1>Tasks of {{ selectedProjectName }} </h1> 
    <div class='task-board'>
      <v-tasklayout :tasks='tasksToDo' @updateTaskStatus='updateTaskStatus' statusText='To do'></v-tasklayout>
      <v-tasklayout :tasks='tasksProgress' @updateTaskStatus='updateTaskStatus' statusText='In progress'></v-tasklayout>
      <v-tasklayout :tasks='tasksDone' @updateTaskStatus='updateTaskStatus' statusText='Done'></v-tasklayout>
    </div> <!--end of task-board-->   
    <!-- <v-taskmodal v-if='showTaskModal' @close='showTaskModal = false'></v-taskmodal> -->
  </section>
</template>

<script>
import TaskLayout from './TaskLayout';
import draggable from 'vuedraggable';
import axios from 'axios';
// import TaskModal from './components/TaskModal';

export default {
  name: 'Tasks',
  data() {
    return { 
      tasks: [],
      tasksToDo: [],
      tasksProgress: [],
      tasksDone: [],
      selectedTask: 'task.id',
    }
  },
  components: {
    'v-tasklayout': TaskLayout,
    // 'v-taskmodal': TaskModal,
    draggable
  },

  computed: {
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
    axios.get('http://admin.taskboard.app/api/tasks', {
      auth: {username: 'anna', password: 'test123'}
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
    },

    //Update task status when dragging the task to new status
    updateTaskStatus(selectedTask, id) {
      // axios.put('http://admin.taskboard.app/api/tasks/'+selectedTask,{task:status,taskStatus})
      // .then(response => {
      //   console.log('response', sresponse);
      // }).catch((err) => {
      //   console.log(err);
      // });
      //   auth: {username: 'anna', password: 'test123'}
      // }).then(response => {
      //   location.reload();
      // })
      // .catch((err) =>{
      //   console.log(err);
      // })

      console.log('selectedTask', selectedTask)
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
  // padding: 0 0.8rem;

  @include breakpoint(medium) {
    flex-flow: row nowrap;
    align-items: flex-start;
    // padding: 0 0.4rem;
  }
}

</style>