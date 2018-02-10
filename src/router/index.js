import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Projects from '@/components/Projects';
import Tasks from '@/components/Tasks';
// import SingleTask from '@/components/SingleTask';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: Register,
    // },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      props: true
    },
    {
      path: '/projects/:id',
      name: 'tasks',
      component: Tasks,
    },
  ],
});
