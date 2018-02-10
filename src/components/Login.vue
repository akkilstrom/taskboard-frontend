<template>
	<section class='login-container'>
		<h1>Login</h1>
    <form action='#'>
      <label for='email'>E-mail</label>
      <input type='email'><br>
      <label for='password'>Password</label>
      <input type='password'><br>
      <router-link to='/projects'> <button>Login</button></router-link>
    </form>
	</section>
</template>

<script>
import axios from 'axios';

export default {
};

</script>

<style lang='scss' scoped>
@import '../assets/scss/style.scss';

.login-container {
  width: 90%;
  max-width: 30rem;
  display: flex;
  flex-flow: column wrap;

  @include breakpoint(medium) {
    padding-top: 2rem;
  }
}

label {
  width: 100%;
  display: inline-block;
  text-align: left;
  margin: 0.5rem 0 0.5rem 0.75rem;
}

input {
  height: 3.5rem;
  width: 100%;
  font-size: 1.1rem;
  border: 1px solid black;
  background-color: white !important;
  box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.03), 
              0 3px 6px 0 rgba(0, 0, 0, 0.03), 
              0 1px 2px 0 rgba(0, 0, 0, 0.10);
  border: none;
  outline: none;
  border-radius: 0px;
  outline: none;
  padding: .5rem .75rem;
  border-radius: .20rem;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 50px white inset;
}

button {
  border: none;
  outline: none;
  width: 100%;
  margin-top: 2rem; 
  height: 3.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  text-transform: uppercase;
  font-family: $ff-body;
  background-color: $color-primary;
  color: $color-secondary;
  border-radius: .20rem;

  &:hover {
    background-color: $hover-c-primary;
  }
}
</style>