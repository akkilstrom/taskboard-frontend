<template>
  <div id='app'>
    <app-header></app-header>
    <main>
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
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

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-login': Login,
    'app-projects': Projects,
    'app-tasks': Tasks,
  },
};
</script>
<style lang='scss'>
  @import './assets/scss/style.scss';

  body, html{
    padding: 0;
    margin: 0;
    width:100%;
    background: linear-gradient(#AFD1DE, #FAF8E1);
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: $font-family-body;
    color: #2c3e50;
    height: 100%;

    @include breakpoint(medium) {
      background: deeppink;
    }

    @include breakpoint(large) {
      background: lightseagreen;
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
    padding-top: 10rem;
    min-height: 40rem;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }

</style>
