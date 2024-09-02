<template>
  <div class="carousel" @mouseover="stopScroll" @mouseleave="startScroll" @wheel="onWheel">
    <div class="carousel-track" :style="{ transform: `translateX(${-scrollPosition}px)` }">
      <CarrouselItem v-for="(item, index) in displayItems" :key="index" class="carousel-item" :item="item" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, defineProps } from 'vue';
import CarrouselItem from "@/components/pages/home/CarrouselItem.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  scrollDirection: {
    type: String,
    default: 'right'
  }
});

const itemWidth = 220; // 200px width + 20px margin
const totalWidth = computed(() => props.items.length * itemWidth);

const displayItems = ref([...props.items, ...props.items, ...props.items]);

const scrollPosition = ref(0);
let scrollInterval = null;

const startScroll = () => {
  scrollInterval = setInterval(() => {
    scrollPosition.value += props.scrollDirection === 'right' ? 2 : -2;
    if (scrollPosition.value >= totalWidth.value * 2) {
      scrollPosition.value -= totalWidth.value;
    } else if (scrollPosition.value < 0) {
      scrollPosition.value += totalWidth.value;
    }
  }, 50);
};

const stopScroll = () => {
  clearInterval(scrollInterval);
};

const onWheel = (event) => {
  event.preventDefault();
  scrollPosition.value += event.deltaY;

  if (scrollPosition.value < 0) {
    scrollPosition.value += totalWidth.value;
  } else if (scrollPosition.value >= totalWidth.value * 2) {
    scrollPosition.value -= totalWidth.value;
  }
};

onMounted(() => {
  startScroll();
});

onUnmounted(() => {
  stopScroll();
});
</script>

<style scoped>
.carousel {
  overflow: hidden;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}

.carousel-track {
  display: flex;
  transition: transform 0.1s linear;
}

.carousel-item {
  min-width: 200px;
  margin: 0 10px;
  text-align: center;
}

.carousel-item:hover {
  transform: scale(1.05);
  transition: transform 0.3s;
}

.carousel-item img {
  width: 100%;
  height: auto;
}
</style>