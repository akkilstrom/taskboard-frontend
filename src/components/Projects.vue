<template>
  <section class='project-container'>
    <h1>Choose the project down below</h1>
    <form action='#'>
      <select name='projects' id='projects' v-on:change='changeRoute' v-model="selectedValue" required>
        <option value='' disabled selected hidden >Please choose...</option>
        <option v-for='project in projects' :value='project.id' :key='project.id'>
          <span class='drop-down'>{{ project.name }}</span>
        </option> 
      </select>
    </form>   
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return { 
      projects: [],
      selectedValue: 0,
    }
  },
  mounted() {
    axios.get('http://admin.taskboard.app/api/projects', {
      auth: {username: 'anna', password: 'test123'}})
      .then(response => {
        console.log('projekt', response);
        this.$set(this._data, 'projects', response.data)
    });
  },
  computed: {
  	selectedProject() {
      return this.projects.find(project => project.id === this.selectedValue)
    }
  },
  created() {
  	// set the selected project's id
    this.selectedValue = this.project.id
  },
  methods: {
    updateProject() {
      this.$store.commit('setSelectedProject', this.selectedValue);
      console.log('denna körs', this.selectedValue)
    },
    updateName() {
      this.projects.forEach((project) => {
        if(project.id === this.selectedValue) {
          this.$store.commit('setProjectName', project.name);
        }
      })
    },
    changeRoute() {
      this.$router.push({path:'/projects/' + this.selectedValue, params: this.selectedValue })

      this.updateProject(this.selectedValue);
      this.updateName();
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