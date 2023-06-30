<template>
<header>
  <section class="relative mx-auto">
    <!-- navbar -->
    <nav class="flex justify-between bg-gray-900 text-white w-screen">
      <div class="px-5 xl:px-12 py-6 flex w-full items-center">
        <router-link class="text-3xl text-white font-bold font-heading" to="/">Portfolio Glossary</router-link>
        <!-- Nav Links -->
        <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><router-link class="hover:text-gray-200" to="/fake-store">Fake Store</router-link></li>
          <li><router-link class="hover:text-gray-200" to="/pokemon">Pokemon</router-link></li>
          <li><router-link class="hover:text-gray-200" to="/star-wars">Star Wars</router-link></li>
        </ul>
        <!-- Header Icons -->
        <div class="hidden xl:flex items-center space-x-5 items-center">
          <router-link class="flex items-center hover:text-gray-200" to="/pokemon/my-pokedex">
            <font-awesome-icon icon="robot" class="" />
            <span class="flex absolute -mt-5 ml-4">
              <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-4 w-4 bg-pink-500">
                  <span :style="{marginLeft: marginLeft(pokedex) + 'px'}" style="font-size: 12px">{{pokedex.length}}</span>
                </span>
              </span>
          </router-link>
          <a class="hover:text-gray-200" href="#">
            <font-awesome-icon icon="heart" class="" />
          </a>
          <router-link class="flex items-center hover:text-gray-200" to="/fake-store/cart">
            <font-awesome-icon icon="shopping-cart" class="" />
            <span class="flex absolute -mt-5 ml-4">
              <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-4 w-4 bg-pink-500">
                  <span :style="{marginLeft: marginLeft(productsInBag) + 'px'}" style="font-size: 12px">{{productsInBag.length}}</span>
                </span>
              </span>
          </router-link>
          <!-- Sign In / Register      -->
          <a class="flex items-center hover:text-gray-200" href="#">
            <font-awesome-icon icon="user" class="" />
          </a>

        </div>
      </div>
      <!-- Responsive navbar -->
      <a class="xl:hidden flex mr-6 items-center" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span class="flex absolute -mt-5 ml-4">
          <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
          </span>
        </span>
      </a>
      <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </a>
    </nav>

  </section>
</header>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'HeaderGlossary',
  computed: {
    ...mapState('fakeStore', ['productsInBag']),
    ...mapState('pokemon', ['pokedex'])
  },
  methods: {
    marginLeft(item = []) {
      if (item.length >= 10) {
        return 0;
      }
      return 5;
    }
  }
}
</script>

<style lang="scss">
nav a.router-link-exact-active {
  color: #ea580c;
}
</style>
