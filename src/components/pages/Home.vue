<script setup>
import { ref, onMounted } from 'vue';
import MainHeader from "@/components/pages/home/MainHeader.vue";
import ClothingCarrousel from "@/components/pages/home/ClothingCarrousel.vue";
import WelcomeBackground from "@/components/pages/home/WelcomeBackground.vue";

const firstItems = ref([]);
const secondItems = ref([]);
const thirdItems = ref([]);

const folders = [
  '47-24-145 BluBluBrown', '49-18-145 YellowBrown', '50-20-145 Black Brown', '51-18-145 TransparentBlu',
  '53-17-140 SkinPink', '55-16-145 BrownRed', '47-24-145 TransparentBla', '49-19-145 BlackBlue',
  '50-20-145 Green', '51-18-145 WhitePink', '54-16-145 Black', '55-16-145 BrownWhite',
  '47-24-145 TransparentGre', '49-19-145 BlackPink', '50-20-145 Transparent', '52-18-140 BlackYellow',
  '54-16-145 TransparentBlu', '55-16-145 GoldenBlue', '48-21-145 TranspGreen', '49-19-145 BrownBluOran',
  '51-16-140 Brownage', '52-18-140 BlueBlack', '54-16-145 TransparentPin', '55-17-150 BlackGold',
  '48-21-145 TranspYellow', '49-19-145 Leopard', '51-16-140 Pink', '52-18-140 DarkTransparen',
  '54-18-140 Black Blue', '55-17-150 LeopardBrown', '49-18-145 GreyGold', '49-19-145 TranspBlu',
  '51-16-140 Red', '53-17-140 BlackRed', '54-18-140 Blue', '55-17-150 TransparentGol',
  '49-18-145 GreyGrey', '49-19-145 TranspDark', '51-18-145 BrownOrange', '53-17-140 BrownOrange',
  '54-18-140 Brown'
];

async function getRandomFolderItems() {
  try {
    if (folders.length === 0) return [];

    const randomFolder = folders[Math.floor(Math.random() * folders.length)];
    const items = [];
    let fileCounter = 1;

    while (fileCounter <= 15) {
      const fileName = `${fileCounter}.webp`;
      const fileUrl = `/output/${encodeURIComponent(randomFolder)}/${fileName}`;

      const fileResponse = await fetch(fileUrl);

      if (fileResponse.status === 404) {
        fileCounter++;
        continue;
      }

      if (!fileResponse.ok) break;

      items.push({
        name: randomFolder.split(' ')[0],
        image: fileUrl
      });

      fileCounter++;
    }
    return items;
  } catch (error) {
    return [];
  }
}

onMounted(async () => {
  firstItems.value = await getRandomFolderItems();
  secondItems.value = await getRandomFolderItems();
  thirdItems.value = await getRandomFolderItems();
});

</script>

<template>
  <div class="home">
    <MainHeader/>
    <WelcomeBackground/>

    <div class="carrousel">
      <ClothingCarrousel :items="firstItems"/>
      <ClothingCarrousel :items="secondItems" scroll-direction="left"/>
      <ClothingCarrousel :items="thirdItems"/>


    </div>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  max-width: none;
}
</style>