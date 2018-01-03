<template>
  <article class="task-card">
    <ul>
      <li class='task-card' v-for='task in tasks' :key='task.id' v-on:click='task.show = !task.show'>
        <h3>{{ task.name }}</h3>
        <p>{{ task.priority }}</p>
        <p v-show='task.show'>{{ task.desc }}</p>
      </li>
    </ul>
    <div class='task-board'>
      <div class='card-container'>
        <h2>To do</h2>
        <!--<h2 v-if="status === 'progress'">In progress</h2>
        <h2 v-if="status === 'done'">Done</h2>-->
        <div class='task-card' v-for='task in tasks' :key='task.id' v-on:click='task.show = !task.show'>
          <h3>{{ task.name }}</h3>
          <p>{{ task.status }}</p>
          <p v-show='task.show'>{{ task.desc }}</p>
        </div>
      </div>
      <div class='card-container'>
        <h2>In progress</h2>
        <!--<ul>-->
          <div class='task-card' v-for='task in tasks' :key='task.id' v-on:click='task.show = !task.show'>
            <h3>{{ task.name }}</h3>
            <p>{{ task.status }}</p>
            <p v-show='task.show'>{{ task.desc }}</p>
          </div>
        <!--</ul>-->
      </div>
      <div class='card-container'>
        <h2>Done</h2>
        <!--<ul>-->
          <div class='task-card' v-for='task in tasks' :key='task.id' v-on:click='task.show = !task.show'>
            <h3>{{ task.name }}</h3>
            <p>{{ task.status }}</p>
            <p v-show='task.show'>{{ task.desc }}</p>
          </div>
        <!--</ul>-->
      </div>
    </div>

    
    <!--<div class="task-header">
        <h2>
            <a href='#'>}</a>
        </h2>
        <div class='status-container'>-->
            <!--@switch($task->status)
                @case(0)
                    @include( 'icons.todo' )
                    @break

                @case(1)
                    @include( 'icons.progress' )
                    @break
                
                @case(3) 
                    @include( 'icons.done' )
                    @break
            @endswitch-->
        <!--</div>
    </div>
    <p class='task-meta'>
        Client: {{ projects.client }} <br>
        <a href="#">Project owner here</a> on DATE HERE
    </p>
    <p class='task-meta'>
        Priority: {{ $tasks.priority }} <br>-->
        <!--Deadline: <br>-->
        <!--@if(count($task->tags))
            Tags:
            @foreach($task->tags as $tag)
                <a href="/tasks/tags/{{ $tag->name }}">#{{ $tag->name }}</a>
            @endforeach
        @endif-->
    <!--</p>
    <p> {{ $tasks.description }}</p>-->
  </article><!-- /.task-card -->
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
    tasks() {
      return this.$store.state.tasks;
    }
  }
};

</script>

<style lang='scss' scoped>
  // @import '../assets/scss/style.scss';
</style>