<template>
  <section class='project-container'>
    <h1>Choose the project down below</h1>
    <form action='#'>
      <select name='projects' id='projects' required>
        <option value='' disabled selected hidden>Please choose...</option>
        <option v-for='project in projects' :key='project.id'>
          <span class='drop-down'>{{ project.name }}</span>
        </option> 
      </select>
    </form>   
  </section>
</template>

<script>
import axios from 'axios';
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  }
};
</script>

<style lang='scss' scoped>
  @import '../assets/scss/style.scss';
  .project-container {
    padding-top: 4rem;
    width: 90%;
  }

  select {
    height: 3.5rem;
    width: 100%;
    max-width: 20rem;
    font-size: 1.1rem;
    box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.03), 
                0 3px 6px 0 rgba(0, 0, 0, 0.03), 
                0 1px 2px 0 rgba(0, 0, 0, 0.10);
    border: none;
    outline: none;
    border-radius: .20rem;
  }

  option {
    padding-left: 1rem;
  }
</style>