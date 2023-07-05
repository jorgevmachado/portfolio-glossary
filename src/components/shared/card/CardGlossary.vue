<template>
  <div class="card relative m-5" :style="{'background-color': backgroundColor}">
    <div class="card__container">
      <card-actions-glossary
          :item="item"
          :allow-remove-from-bag="allowRemoveFromBag"
          :is-in-bag="isInBag"
          :color="backgroundColor"
          @add="add"
          @remove="remove"
          :no-action="noAction"
          :custom-icon="customIcon"
      />
      <div class="card__container-header">
        <span class="font-bold text-lg flex justify-center mb-5" :style="{color: fontColor}" v-if="obj.name">{{obj.name}}</span>
        <div class="relative h-100 card__container-header__image" v-if="obj.image">
          <div v-if="imageCenter" class="flex justify-center">
            <img class="card__container-header__image-center " :src="obj.image" alt="">
          </div>
          <div v-else></div>
        </div>
      </div>
      <div class="card__container-body mt-5 mb-5">
        <span class="font-bold text-lg flex justify-center mb-5 text-black" v-if="obj.price > 0">US$ {{obj.price.toFixed(2)}}</span>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import CardActionsGlossary from '@/components/shared/card/CardActionsGlossary.vue';

export default {
  name: 'CardGlossary',
  components: {CardActionsGlossary},
  props: {
    item: {
      type: Object,
      required: true,
    },
    imageCenter: {
      type: Boolean,
      default: false,
    },
    allowRemoveFromBag: {
      type: Boolean,
      default: false,
    },
    noAction: {
      type: Boolean,
      default: false,
    },
    customIcon: {
      type: String,
      default: 'check',
    },
    isInBag: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: '#fff',
    }
  },
  computed: {
    obj() {
      const { title = '', name = '', image = '', price = 0} = this.item;
      return {
        name: title === '' ? name : title,
        image,
        price,
      }
    },
    fontColor() {
      switch (this.backgroundColor) {
        case '#fff':
          return '#000';
        case '#000':
          return '#ffff00';
        default:
          return '#000';
      }
    }
  },
  methods: {
    add(field) {
      this.$emit('add', field);
    },
    remove(field) {
      this.$emit('remove', field);
    },
  }
}
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  padding: 25px;
  border-radius: 30px;
  border: none;
  color: #fff;
  width: 320px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover,
  &:active {
    opacity: 0.8;
  }
  &__container {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
    &-header {
      &__image {
        &__top {
          position: absolute;
          right: -80px;
          bottom: -46px;
          width: 150px;
          height: 150px;
          overflow-clip-margin: content-box;
          overflow: clip;
        }
        &-center {
          width: 15rem;
          height: 15rem;
        }
      }
    }
  }
}
</style>
