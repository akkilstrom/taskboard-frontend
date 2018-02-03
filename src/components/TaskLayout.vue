<template>
  <div class='status-container'>
    <h2>{{ statusText }}</h2>
    <!-- <draggable v-model='tasks' class='task-container' :options="{group:'tasks'}" @start='drag=true' @end='drag=false' :element="'div'" style='min-height: 100px'> -->
    <draggable v-model='tasks' @end="test" class='task-container' :options="{group:'tasks'}" :element="'div'" style='min-height: 100px'>
      <div class='task-card' v-for='task in tasks' :key='task.id' >
        <h3>{{ task.task }}</h3>
        <!-- <p><strong>Project owner:</strong>{{ task.user_id }}</p> -->
        <p><strong>Status:</strong>{{ task.status }}</p>
        <!-- <select v-model='selectedTask' @change='updateTaskStatus(selectedTask)'> 
          <option value='0'>To do</option> 
          <option value='1'>In progress</option>
          <option value='2'>Done</option>
        </select> -->
        <p><strong>Importance: </strong>{{ task.importance }}</p>
        <p><strong>Assigned by: </strong>{{ task.assigned_by }}</p> 
        <div class='edit-container'>
          <div class='edit-btn' id='show-modal' @click='showTaskModal = true'>
            <svg version="1.1" width="30" height="30"  viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title>edit-btn</title>
              <path class="clr-i-solid clr-i-solid-path-1" d="M4.22,23.2l-1.9,8.2a2.06,2.06,0,0,0,2,2.5,2.14,2.14,0,0,0,.43,0L13,32,28.84,16.22,20,7.4Z"></path><path class="clr-i-solid clr-i-solid-path-2" d="M33.82,8.32l-5.9-5.9a2.07,2.07,0,0,0-2.92,0L21.72,5.7l8.83,8.83,3.28-3.28A2.07,2.07,0,0,0,33.82,8.32Z"></path>
              <rect x="0" y="0" width="30" height="30" fill-opacity="0"/>
            </svg>
          </div>
        </div>
      </div>
    </draggable> 
  </div> 
</template>

<script>
import draggable from 'vuedraggable';
// import { mapGetters, mapActions } from 'vuex';
import Store from '@/store/store.js';
// import EditIcon from './icons/Edit.svg';

export default {
  props: [ 'tasks', 'statusText', 'selectedTask', 'updateTaskStatus' ],
  components: { draggable },
  data() {
    return {
      isDragging: false,
    }
  },
  methods: {
    test() {
      console.log('selectedTask')
    }
  }
}

</script>

<style lang='scss' scoped>
@import '../assets/scss/style.scss';
.status-container {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  // border: 1px solid red;
  flex-grow: 1;
  width: 100%;
  // background-color: rgba(0,0,0,.4);
}

.task-container {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  /*flex-grow: 1;*/
  text-align: center;
  width: 100%;
  max-width: 25rem;
  // border: 1px solid blue;
  // background-color: rgba($color-primary, 0.6);
}

.lightbox {
  display: none;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  text-align: center;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);

  &:target {
    outline: none;
    display: block;
  }
}

.task-card {
  box-sizing: border-box;
  background-color: white;
  text-align: left;
  padding: 2rem 2rem 2rem 2rem;
  box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.03), 
              0 3px 6px 0 rgba(0, 0, 0, 0.03), 
              0 1px 2px 0 rgba(0, 0, 0, 0.10);
  margin: 0.8rem 0;
  cursor: move;
  // height: 10rem;
  width: 90%;
  flex-basis: 10rem;

  // &:hover {
  //   background-color: #e2e4e6; //#FAF8E1
  // }

  p {
    margin: 0;
    line-height: 1.5;
    font-size: 1rem;

    @include breakpoint(medium) {
      font-size: 0.8rem;
    }
  }

  @include breakpoint(medium) {
    margin: 0.8rem 0.4rem;
    padding: 1rem 1rem 1rem 1rem;
  }
  select {
    height: 2rem;
    width: 100%;
    max-width: 10rem;
    font-size: 1.1rem;
    border-radius: 0px;
    -webkit-border-radius: 0px;
  }
}

.edit-container {
  // margin-top: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  // border: 1px solid red;
}

.edit-btn {
  cursor: pointer;
}

h3 {
  margin-top: 0;
}

svg {
  fill: $color-primary;

  &:hover {
    fill: $hover-c-secondary;
  }
}
</style>