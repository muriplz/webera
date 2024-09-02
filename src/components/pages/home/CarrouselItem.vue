<script setup>

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="carrousel-item">
    <div class="wrapper">
      <img :src="item.image" :alt="item.name" />
    </div>
  </div>
</template>

<style scoped>
.carrousel-item {
  padding: 4px;
  border-radius: 24px;
  overflow: visible;
}

.wrapper {
  display: flex;
  border: 2px solid green;
  border-radius: 20px;
  min-height: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);

}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
</style>