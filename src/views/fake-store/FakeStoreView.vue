<template>
  <section class="fake-store" v-if="!loading">
    <h1 class="justify-center text-center mt-10 mb-5 text-lg">My FakeStore</h1>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 cards" v-if="products.length">
      <card-glossary
          v-for="(item, index) in products"
          :key="index"
          :isInBag="haveOnBag(item)"
          :item="item"
          @add="addToBag"
          @remove="removeFromBag"
          image-center
          allow-remove-from-bag>
      </card-glossary>
    </div>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 cards" v-else>
      <span class="font-bold text-lg flex justify-center mb-5 text-black">not product find</span>
    </div>
  </section>
</template>

<script>

import {mapActions, mapState} from 'vuex';
import CardGlossary from '@/components/shared/card/CardGlossary.vue';

export default {
  name: 'FakeStoreView',
  components: {CardGlossary},
  created() {
    this.loadProducts();
  },
  computed: {
    ...mapState('fakeStore', ['products', 'productsInBag']),
    ...mapState(['loading'])
  },
  methods: {
    ...mapActions({
      loadProducts: 'fakeStore/loadProducts',
      addToBag: 'fakeStore/addToBag',
      removeFromBag: 'fakeStore/removeFromBag',
    }),
    haveOnBag(product) {
      return !!this.productsInBag.find(item => item.id === product.id);
    },
  },
}
</script>

<style lang="scss">
.fake-store {
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .card {
      flex: 0 0 30%;
      box-sizing: border-box;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      height: 440px;
      @media only screen and (max-width: 769px) {
        flex: 0 0 40%;
      }
      @media only screen and (max-width: 640px) {
        flex: 0 0 90%;
      }
      &.inBag {
        border: 1px solid #007bff;
      }
      .card-image {
        margin: 20px auto;
        width: 160px;
        height: 140px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      h4 {
        margin: 22px auto;
        font-size: 12px;
        max-width: 60%;
        font-weight: normal;
      }

      p.price {
        font-size: 20px;
        font-weight: bold;
      }

      button {
        color: #fff;
        background-color: #007bff;
        border: 1px solid #007bff;
        border-radius: 100px;
        font-weight: 400;
        text-align: center;
        padding: 8px 16px;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }

        &.remove {
          background-color: transparent;
          border: none;
          color: black;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
