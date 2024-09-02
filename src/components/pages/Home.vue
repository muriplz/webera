<script setup>

import MainHeader from "@/components/pages/home/MainHeader.vue";
import Slogan from "@/components/pages/home/Slogan.vue";
import Introduction from "@/components/pages/home/Introduction.vue";
import ClothingCarrousel from "@/components/pages/home/ClothingCarrousel.vue";
import EnteringText from "@/components/animations/EnteringText.vue";
import WelcomeBackground from "@/components/pages/home/WelcomeBackground.vue";

const firstItems = [
  { name: 'Test Item 1', image: 'path/to/test-image1.jpg' },
  { name: 'Test Item 2', image: 'path/to/test-image2.jpg' },
  { name: 'Test Item 3', image: 'path/to/test-image3.jpg' },
  { name: 'Test Item 1', image: 'path/to/test-image1.jpg' },
  { name: 'Test Item 2', image: 'path/to/test-image2.jpg' },
  { name: 'Test Item 3', image: 'path/to/test-image3.jpg' },
  { name: 'Test Item 1', image: 'path/to/test-image1.jpg' },
  { name: 'Test Item 2', image: 'path/to/test-image2.jpg' },
  { name: 'Test Item 3', image: 'path/to/test-image3.jpg' },
  { name: 'Test Item 1', image: 'path/to/test-image1.jpg' },
  { name: 'Test Item 2', image: 'path/to/test-image2.jpg' },
  { name: 'Test Item 3', image: 'path/to/test-image3.jpg' },
  { name: 'Test Item 1', image: 'path/to/test-image1.jpg' },
  { name: 'Test Item 2', image: 'path/to/test-image2.jpg' },
  { name: 'Test Item 3', image: 'path/to/test-image3.jpg' },
];

const secondItems = [
  { name: 'Test Item 1', image: 'path/to/test-image1.jpg' },
  { name: 'Test Item 2', image: 'path/to/test-image2.jpg' },
  { name: 'Test Item 3', image: 'path/to/test-image3.jpg' },
  { name: 'Test Item 1', image: 'path/to/test-image1.jpg' },
  { name: 'Test Item 2', image: 'path/to/test-image2.jpg' },
  { name: 'Test Item 3', image: 'path/to/test-image3.jpg' },
  { name: 'Test Item 1', image: 'path/to/test-image1.jpg' },
  { name: 'Test Item 2', image: 'path/to/test-image2.jpg' },
  { name: 'Test Item 3', image: 'path/to/test-image3.jpg' },
  { name: 'Test Item 1', image: 'path/to/test-image1.jpg' },
  { name: 'Test Item 2', image: 'path/to/test-image2.jpg' },
  { name: 'Test Item 3', image: 'path/to/test-image3.jpg' },
  { name: 'Test Item 1', image: 'path/to/test-image1.jpg' },
  { name: 'Test Item 2', image: 'path/to/test-image2.jpg' },
  { name: 'Test Item 3', image: 'path/to/test-image3.jpg' },
  { name: 'Test Item 1', image: 'path/to/test-image1.jpg' },
  { name: 'Test Item 2', image: 'path/to/test-image2.jpg' },
  { name: 'Test Item 3', image: 'path/to/test-image3.jpg' },
];
</script>

<template>
  <div class="home">
    <MainHeader/>
    <WelcomeBackground/>

    <Slogan/>

    <hr class="separator">
    <Introduction/>

    <div class="carrousel">
      <ClothingCarrousel :items="firstItems"/>
      <ClothingCarrousel :items="secondItems" scroll-direction="left"/>
      <ClothingCarrousel :items="firstItems"/>
    </div>
  </div>
</template>

<style scoped>
.separator {
  border: 1px solid green;
  width: 35%;
  margin: auto;
}

.home {
  width: 100%;
  max-width: none;

}
</style>