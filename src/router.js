import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/comisiones-y-pagos',
      name: 'comisiones',
      component: () => import(/* webpackChunkName: "about" */ './views/comisiones-y-pagos/comisiones-y-pagos.vue'),
    },
    {
      path: '/terminos-y-condiciones',
      name: 'terminos',
      component: () => import(/* webpackChunkName: "about" */ './views/terminos-y-condiciones/terminos-y-condiciones.vue'),
    },
    {
      path: '/politica-de-cookies',
      name: 'cookies',
      component: () => import(/* webpackChunkName: "about" */ './views/politica-de-cookies/index.vue'),
    },
    {
      path: '/registro/:id',
      name: 'registro',
      component: () => import(/* webpackChunkName: "about" */ './views/registro/registro.vue'),
    },
    {
      path: '/entrar',
      name: 'entrar',
      component: () => import(/* webpackChunkName: "about" */ './views/entrar/entrar.vue'),
    },
    {
      path: '/paypal-chekout/',
      name: 'pagar',
      component: () => import(/* webpackChunkName: "about" */ './views/paypal/index.vue'),
    },
    {
      path: '',
      name: 'pack',
      component: () => import(/* webpackChunkName: "about" */ './views/pack/pack.vue' ),
      children:[
        {
          path: '/pack/',
          name: 'default',
          component: () => import(/* webpackChunkName: "about" */ './views/pack/default/default.vue'),
        },
        {
          path: '/pack/mis-pagos/',
          name: 'mis-pagos',
          component: () => import(/* webpackChunkName: "about" */ './views/mis-pagos/mis-pagos.vue'),
        },
        {
          path: '/pack/videos',
          name: 'video',
          component: () => import(/* webpackChunkName: "about" */ './views/videos/video.vue'),
        },
      ]
    },
  ],
});
