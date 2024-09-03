<script setup>
import IncreasingNumber from "@/components/animations/IncreasingNumber.vue";
import GrayLogo from "@/assets/svg/gray_logo.svg?component";
import { onMounted, onUnmounted, ref, computed } from "vue";
import LanguageSelector from "@/components/pages/home/LanguageSelector.vue";

const isAtTop = ref(true);
const isMounted = ref(false);

const handleScroll = () => {
  isAtTop.value = window.scrollY < 100;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
  isMounted.value = true; // Trigger the transition
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const hasBackground = computed(() => !isAtTop.value);
</script>

<template>
  <transition name="header-transition">
    <header v-if="isMounted" :class="{ 'no-background': isAtTop, 'with-background': !isAtTop }">
      <transition name="background-transition">
        <div v-show="true" :class="{ 'background-visible': !isAtTop, 'background-hidden': isAtTop }" class="background"></div>
      </transition>
      <GrayLogo class="logo"/>
      <p class="title">eraeyewear.com</p>
      <LanguageSelector :put-secondary="hasBackground" secondary-color="var(--pantone-black)" class="language-selector"/>
    </header>
  </transition>
</template>

<style scoped>
@import url(https://fonts.bunny.net/css?family=sora:500); /* color palette from <https://github.com/vuejs/theme> */

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-soft);
  z-index: -1;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: transform 0.3s ease;
}

.background-visible {
  transform: translateY(0);
}

.background-hidden {
  transform: translateY(-100%);
}

.title {
  font-family: 'Sora', sans-serif;
  font-size: 1.5rem;
  color: var(--color-text);
}

.logo {
  width: 190px;
  height: 100px;
  max-width: 100%;
  max-height: 100%;
  color: var(--color-text);
  cursor: pointer;
}

.language-selector {
  margin-right: 20px;

}

.header-transition-enter-active,
.header-transition-leave-active {
  transition: transform 0.3s ease;
}

.header-transition-enter-from,
.header-transition-leave-to {
  transform: translateY(-100%);
}

.header-transition-enter-to,
.header-transition-leave-from {
  transform: translateY(0);
}

@keyframes scale-up {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

.logo {
  width: 190px;
  height: 100px;
  max-width: 100%;
  max-height: 100%;
  color: var(--color-text);
  cursor: pointer;
  transition: color 0.1s ease;
}

.logo:hover {
  color: var(--background-lighter);
  animation: scale-up 0.3s forwards;
}
</style>