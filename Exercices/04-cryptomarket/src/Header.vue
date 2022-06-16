<script setup>
import { inject } from "vue";

const { isLogged, toggleIsLogged } = inject("login");
</script>
<template>
  <header
    class="
      mt-6
      mx-8
      shadow-md
      rounded-md
      flex
      justify-between
      items-center
      px-8
      bg-white
      overflow-hidden
    "
  >
    <img src="/logo.png" alt="logo" class="w-16 animation-image" />
    <button class="btn primary" @click="toggleIsLogged" v-if="!isLogged">
      Connexion
    </button>
    <button class="btn cancel" @click="toggleIsLogged" v-else>
      Déconnexion
    </button>
  </header>
</template>