<script setup>
/**
Créer une petite application qui au click sur le bouton "spam" va ajouter une ou plusieurs images selon le nombre de click déjà effectué.
Exemple :
- Click 1 : Ajouter une image
- Click 2 : Ajouter deux images
- Click 3 : Ajouter trois images
- Click N : Ajouter N images

Vous pouvez également ajouter un événement sur les images qui fera la même chose qu'au click sur le bouton "spam"
*/
import { ref } from "vue";

const imgList = ref([]);
const imgSrc =
  "https://media.discordapp.net/attachments/493767680256638979/977567817501134878/20220521_154521.jpg";
let count = 0;

const spamCat = () => {
  count++;

  for (let i = 0; i < count; i++) {
    imgList.value.push(imgSrc);
  }
};
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <header
      class="
        mt-6
        mx-8
        shadow-md
        rounded-md
        flex
        justify-center
        bg-white
        overflow-hidden
      "
    >
      <img src="/logo.png" alt="logo" class="w-16 animation-image" />
    </header>
    <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
      <div class="flex justify-center my-8">
        <button class="btn primary" type="button" @click="spamCat">
          SPAM !!!!!
        </button>
      </div>
      <div class="flex flex-wrap gap-4">
        <img
          v-for="(img, index) in imgList"
          :key="index"
          :src="img"
          @click="spamCat"
          class="w-16 h-16 object-cover"
        />
      </div>
    </main>
  </div>
</template>
