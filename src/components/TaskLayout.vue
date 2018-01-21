<template>
  <div class='status-container'>
    <h2>{{ statusText }}</h2>
    <draggable v-model='tasks' class='task-container' :options="{}" :element="'div'">
      <div class='task-card' v-for="task in tasks" :key='task.id'>
        <h3>{{ task.task }}</h3>
        <!-- <p><strong>Project owner:</strong>{{ task.user_id }}</p> -->
        <p><strong>Status:</strong>{{ task.status }}</p>
        <p><strong>Importance: </strong>{{ task.importance }}</p>
        <p><strong>Assigned by: </strong>{{ task.assigned_by }}</p> 
             
      </div>
    </draggable> 
  </div> 
</template>

<script>
import draggable from 'vuedraggable';
// import { mapGetters, mapActions } from 'vuex';
import Store from '@/store/store.js';
// import { mapState } from 'vuex'

export default {
  props: ['tasks', 'statusText'],
  components: {
    draggable,
  },
};

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
    /*flex-grow: 1;*/
    text-align: center;
    width: 100%;
    max-width: 30rem;
    // border: 1px solid blue;
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
    cursor: pointer;
    // height: 10rem;

    &:hover {
      background-color: #e2e4e6; //#FAF8E1
    }

    &_extended {

    }
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
  }

  .meta-container {
    display: flex;
    flex-flow: row wrap;
    // border: 1px solid red;
    justify-content: space-between;
  }

  h3 {
    margin-top: 0;
  }
</style>