import { createRouter, createWebHistory } from 'vue-router'
const LayoutGlossary = () => import(/* webpackChunkName: "home" */ '../components/shared/LayoutGlossary.vue');
const HomeView = () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue');
const PokemonView = () => import(/* webpackChunkName: "pokemon" */ '../views/pokemon/PokemonView.vue');
const PokemonDetailsView = () => import(/* webpackChunkName: "pokemon" */ '../views/pokemon/PokemonDetailsView.vue');
const PokedexView = () => import(/* webpackChunkName: "pokemon" */ '../views/pokemon/PokedexView.vue');
const StarWarsView = () => import(/* webpackChunkName: "starWars" */ '../views/star-wars/StarWarsView.vue');
const FakeStoreView = () => import(/* webpackChunkName: "fakeStore" */ '../views/fake-store/FakeStoreView.vue');
const FakeStoreCartView = () => import(/* webpackChunkName: "fakeStore" */ '../views/fake-store/FakeStoreCartView.vue');
const StarWarsDetailsView = () => import(/* webpackChunkName: "fakeStore" */ '../views/star-wars/StarWarsDetailsView.vue');

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
      {
        path: ':name',
        name: 'App.Pokemon.Detail',
        component: PokemonDetailsView,
        meta: { pageCategory: 'Pokemon'}
      },
      {
        path: 'my-pokedex',
        name: 'App.Pokemon.pokedex',
        component: PokedexView,
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
      {
        path: ':name',
        name: 'App.StarWars.Detail',
        component: StarWarsDetailsView,
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
