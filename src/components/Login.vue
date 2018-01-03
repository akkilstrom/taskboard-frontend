<template>
	<section class='login-container'>
		<h1>Login</h1>
    <form action='#'>
      <label for='name'>Name</label>
      <input type='text'><br>
      <label for='password'>Password</label>
      <input type='password'><br>
      <button>Login</button>
    </form>
	</section>
</template>

<script>
export default {
  
};

</script>

<style lang='scss' scoped>
  @import '../assets/scss/style.scss';

  .login-container {
    display: flex;
    flex-flow: column wrap;
    // align-items: flex-start;
    max-width: 20rem;
  }

  input {
    width: 100%;
    border: none;
  }
</style>