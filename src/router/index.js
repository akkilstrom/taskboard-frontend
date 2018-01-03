import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Projects from '@/components/Projects';
import Tasks from '@/components/Tasks';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: Register,
    // },
    {
      path: '/',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks,
    }
  ],
});
