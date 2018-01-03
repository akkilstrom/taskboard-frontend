<template>
  <section class='single-task'>
    <h1>Single task here</h1>
    <article></article>
  </section>
</template>

<script>
// import TaskLayout from './components/TaskLayout';
export default {
  components: {
    // 'app-task-layout': TaskLayout,
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
    tasks() {
      return this.$store.state.tasks;
    }
  },
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //     task: {}
  //   }
  // },
  // created() {
  //   this.$http.get( '#' + this.id ).then(function(data){
  //     this.task = data.body;
  //   });
  // }
};

</script>

<style lang='scss' scoped>
  // @import '../assets/scss/style.scss';
</style>