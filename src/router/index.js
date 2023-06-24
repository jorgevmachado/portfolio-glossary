import { createRouter, createWebHistory } from 'vue-router'
const LayoutGlossary = () => import(/* webpackChunkName: "home" */ '../components/shared/LayoutGlossary.vue');
const HomeView = () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue');
const PokemonView = () => import(/* webpackChunkName: "pokemon" */ '../views/PokemonView.vue');
const StarWarsView = () => import(/* webpackChunkName: "starWars" */ '../views/StarWarsView.vue');
const FakeStoreView = () => import(/* webpackChunkName: "fakeStore" */ '../views/FakeStoreView.vue');
const FakeStoreCartView = () => import(/* webpackChunkName: "fakeStore" */ '../views/FakeStoreCartView.vue');

const routes = [
  {
    path: '/',
    component: LayoutGlossary,
    children: [
      {
        path: '',
        name: 'App.Home',
        component: HomeView,
        meta: { pageCategory: 'Home'}
      },
    ]
  },
  {
    path: '/pokemon',
    component: LayoutGlossary,
    children: [
      {
        path: '',
        name: 'App.Pokemon',
        component: PokemonView,
        meta: { pageCategory: 'Pokemon'}
      },
    ]
  },
  {
    path: '/star-wars',
    component: LayoutGlossary,
    children: [
      {
        path: '',
        name: 'App.StarWars',
        component: StarWarsView,
        meta: { pageCategory: 'StarWars'}
      },
    ]
  },
  {
    path: '/fake-store',
    component: LayoutGlossary,
    children: [
      {
        path: '',
        name: 'App.FakeStore',
        component: FakeStoreView,
        meta: { pageCategory: 'FakeStore'}
      },
      {
        path: 'cart',
        name: 'App.FakeStore.Cart',
        component: FakeStoreCartView,
        meta: { pageCategory: 'FakeStore'}
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
