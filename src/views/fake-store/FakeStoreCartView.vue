<template>
  <div class="fake-store-cart">
    <template v-if="productsInBag.length">
      <p class="text-center">Total de Produtos: {{productsInBag.length}}</p>
      <div class="items">
        <div class="item" v-for="(product, index) in productsInBag" :key="index" >
          <div class="remove" @click="removeFromBag(product)">Remover Produto</div>
          <div class="photo"><img :src="product.image" alt=""></div>
          <div class="description">{{product.title}} </div>
          <div class="price">
          <span class="quantity-area">
            <button :disabled="product.quantity <= 1" @click.stop="product.quantity--">-</button>
            <span class="quantity">{{product.quantity}}</span>
            <button @click.stop="product.quantity++">+</button>
          </span>
            <span class="amount">US$ {{(product.price * product.quantity).toFixed(2)}}</span>
          </div>
        </div>
        <div class="grand-total"> Total do pedido: US$ {{ orderTotal() }}</div>

      </div>
    </template>
    <template v-else>
      <h4>No items in bag yet</h4>
    </template>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
  name: 'FakeStoreCartView',
  computed: {
    ...mapState('fakeStore', ['productsInBag'])
  },
  methods: {
    ...mapActions({
      removeFromBag: 'fakeStore/removeFromBag',
    }),
    orderTotal() {
      let total = 0;
      this.productsInBag.forEach(item => {
        total += item.price * item.quantity;
      });
      return total.toFixed(2);
    },
  },
}
</script>

<style lang="scss">
.fake-store-cart {
  padding: 60px 0;
  .items {
    max-width: 800px;
    margin: auto;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }

      .quantity-area {
        margin: 8px auto;
        height: 14px;

        button {
          width: 16px;
          height: 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .quantity {

          margin: 0 4px;
        }
      }

      .photo {
        img {
          max-width: 80px;
        }
      }

      .description {
        padding-left: 30px;
        box-sizing: border-box;
        max-width: 50%;

      }

      .price {
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;

        }
      }
    }
    .grand-total {
      font-size: 24px;
      font-weight: bold;
      text-align: right;
      margin-top: 8px;
    }

  }

}
</style>
