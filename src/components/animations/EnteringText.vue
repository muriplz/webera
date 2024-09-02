<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(false);
const animatedDiv = ref(null);
let observer;

onMounted(() => {
  if (animatedDiv.value) {
    observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.3, // Trigger when 30% of the element is visible
    });

    observer.observe(animatedDiv.value);
  }
});

onBeforeUnmount(() => {
  if (observer && animatedDiv.value) {
    observer.unobserve(animatedDiv.value);
  }
});

function handleIntersection(entries) {
  entries.forEach((entry) => {
    isVisible.value = entry.isIntersecting;
  });
}
</script>

<template>
  <div ref="animatedDiv" class="animated-div-wrapper">
    <transition name="fade-slide">
      <div v-show="isVisible" class="animated-div">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.animated-div {
  height: 100%;
  width: 100%;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>