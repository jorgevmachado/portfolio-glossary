<template>
  <div class="card relative m-5">
    <div class="body">
      <div class="card-image" :style="{ backgroundImage: `url(${image})` }"></div>
      <div class="px-6 py-4 text-center">
        <div class="font-bold">{{title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardGlossary',
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
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
  .body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
  }
}
</style>
