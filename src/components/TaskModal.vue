<template>
  <transition name='v-modal' class="task-modal is-active">
	  <h2>Hej</h2>
  </transition>
</template>

<script>

export default {
  name: 'TaskModal',
};
</script>

<style lang='scss' scoped>
.task-modal {
	// @extend .task-card;
	position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
</style>