<template>
	<footer>
		<h3 v-bind:logo='logo' class='logo'>{{ logo }}</h3>
		<p>{{ copyright }} {{ logo }}</p>
	</footer>
</template>

<script>
export default {
  computed: {
    logo() {
      return this.$store.state.logo;
    },
    copyright() {
      return this.$store.state.copyright;
    }
  }
};

</script>

<style lang='scss' scoped>
  @import '../assets/scss/style.scss';

	footer {
    padding: 4rem 0 1rem 0;
    text-align: center;
    bottom: 0;
    width: 100%;
  }

  .logo {
    font-family: $font-family-logo;
  }

</style>