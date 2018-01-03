<template>
	<header>
    <div class='logo-container'>
      <h1 class='logo'>{{ logo }}</h1>
    </div>
    <!--<app-nav></app-nav>-->
	</header>
</template>

<script>
// import Navigation from './components/Navigation';

export default {
  components: {
    // 'app-nav': Navigation,
  },
  computed: {
    logo() {
      return this.$store.state.logo;
    }
  }
};
</script>

<style lang='scss' scoped>
  @import '../assets/scss/style.scss';

  header {
    padding: 1rem 1rem;
    position: fixed;

    @include breakpoint(medium) {
      padding: 2rem 4rem;
    }
  }

  .logo-container {
    width: 15rem;
    transform: rotate(356deg);
  }

  .logo {
    font-family: 'Pacifico';
    letter-spacing: 0.1rem;
  }

</style>
