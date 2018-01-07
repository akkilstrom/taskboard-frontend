<template>
  <div id='app'>
    <v-header></v-header>
    <main>
      <router-view></router-view>
    </main>
    <v-footer></v-footer>
  </div>
</template>

<script>
// Import locally
import Header from './components/Header';
import Router from './router/index';
import Login from './components/Login';
import Projects from './components/Projects';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import axios from 'axios';

export default {
  name: 'v',
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'v-login': Login,
    'v-projects': Projects,
    'v-tasks': Tasks,
  },
  // data() {
  //   return { 
  //     projects: []
  //   }
  // },
  // mounted() {
  //   axios.get('http://admin.taskboard.app/api/projects', {
  //     auth: {username: 'anna', password: 'test123'}})
  //     .then(response => {
  //       this.$set(this._data, 'projects', response.data)
  //   });
  // },
};
</script>
<style lang='scss'>
  @import './assets/scss/style.scss';

  body, html{
    padding: 0;
    margin: 0 auto;
    text-align: center;
    width:100%;
    background: linear-gradient(lightseagreen, #FAF8E1); //#AFD1DE
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: $font-family-body;
    color: $color-primary;
    height: 100%;

    @include breakpoint(medium) {
      // background: deeppink;
    }

    @include breakpoint(large) {
      // background: lightseagreen;
    }
  }

  html {
    
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: auto; 
  }

  h1 {
    font-size: 1.6rem;

    @include breakpoint(medium) {
      font-size: 1.8rem;
    }

    @include breakpoint(large) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 1.3rem;

    @include breakpoint(medium) {
      font-size: 1.5rem;
    }

    @include breakpoint(large) {
      font-size: 1.7rem;
    }
  }

  main {
    margin: auto;
    width: 100%;
    max-width: 70rem;
    padding-top: 10rem;
    min-height: 40rem;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
//PLACERA KNAPPSTYLING HÄR!!
  // button {
  //   border: none;
  //   outline: none;
  //   width: 100%;
  //   margin-top: 2rem;
  //   height: 3.5rem;
  //   font-size: 1.1rem;
  //   cursor: pointer;
  //   text-transform: uppercase;
  //   font-family: $font-family-body;
  //   background-color: $color-primary;
  //   color: $color-secondary;
  //   border-radius: .20rem;

  //   &:hover {
  //     background-color: $hover-color;
  //   }
  // }

</style>
