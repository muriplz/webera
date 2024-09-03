<template>
  <div class="carrousel-item">
    <div class="wrapper">
      <img :src="item.image" :alt="item.name"/>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.carrousel-item {
  padding: 4px;
  border-radius: 4px;
  overflow: visible;
}

.wrapper {
  display: flex;
  border-radius: 4px;
  min-height: 100px;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  position: relative;
  z-index: 1;
}

</style>
