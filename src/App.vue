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
  name: 'app',
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'v-login': Login,
    'v-projects': Projects,
    'v-tasks': Tasks,
  },
};
</script>
<style lang='scss'>
  @import './assets/scss/style.scss';

  body, html{
    padding: 0;
    margin: 0 auto;
    text-align: center;
    width:100%;
    background: linear-gradient( $bg-primary , $bg-secondary); //#AFD1DE
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: $ff-body;
    color: $color-primary;
    height: 100%;
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

    @include breakpoint(large) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 1.4rem;

    @include breakpoint(large) {
      font-size: 1.7rem;
    }
  }

    h3 {
    font-size: 1.1rem;
  }

  a {
    text-decoration: none;
    color: $color-primary;
  }

  main {
    margin: auto;
    width: 100%;
    max-width: 70rem;
    padding-top: 10rem;
    min-height: 32rem;
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    @include breakpoint(medium) {
      min-height: 40rem;
    }
  }

  select {
    height: 3.5rem;
    width: 100%;
    max-width: 20rem;
    font-size: 1.1rem;
    box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.03) inset, 
                0 3px 6px 0 rgba(0, 0, 0, 0.03) inset, 
                0 1px 2px 0 rgba(0, 0, 0, 0.10) inset;
    border: none;
    outline: none;
    border-radius: 0px;
  }
  
</style>
