<script setup>
import { ref, watch } from "vue";
import Result from "./Result.vue";

const search = ref("");
const result = ref([]);

watch(search, async () => {
  if (search.value.length > 3) {
    const res = await fetch(`http://localhost:8000/darwins?q=${search.value}`);
    result.value = await res.json();
  } else {
    result.value = [];
  }
});

const reset = () => {
  result.value = [];
  search.value = "";
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
      <div class="form-control input my-4 mx-auto w-64">
        <label for="search">Recherche</label>
        <input type="text" id="search" v-model="search" />
      </div>
      <Result :result="result" @on-reset="reset" />
    </main>
  </div>
</template>
