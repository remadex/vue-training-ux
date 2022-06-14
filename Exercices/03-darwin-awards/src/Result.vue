<script setup>
defineProps(["result"]);
const emit = defineEmits(["onReset"]);

const resetSearch = () => {
  emit("onReset");
};
</script>

<template>
  <div>
    <div
      class="
        my-4
        py-4
        px-6
        bg-white
        shadow
        rounded-md
        duration-100
        hover:shadow-md
      "
      v-for="item in result"
      :key="item.id"
    >
      <h2 class="title secondary text-2xl">{{ item.name }}</h2>
      <h3 class="font-semibold my-1">{{ item.death }}</h3>
      <p>{{ item.description }}</p>
    </div>
    <div class="flex justify-end mt-6" v-if="result.length">
      <button class="btn cancel" type="button" @click="resetSearch">
        Réinitialiser la recherche
      </button>
    </div>
  </div>
</template>