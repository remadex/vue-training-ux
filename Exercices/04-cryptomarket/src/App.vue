<script setup>
import Header from "./Header.vue";
import FormCrypto from "./FormCrypto.vue";
import CryptoElement from "./CryptoElement.vue";

import { ref, provide } from "vue";

const isLogged = ref(false);
const toggleIsLogged = () => {
  isLogged.value = !isLogged.value;
};

provide("login", {
  isLogged,
  toggleIsLogged,
});

const cryptoList = ref([]);

const submitCrypto = (value) => {
  cryptoList.value.push(value);
};
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <Header />
    <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
      <FormCrypto @on-submit="submitCrypto" />
      <div class="grid grid-cols-2 gap-8">
        <TransitionGroup name="list">
          <CryptoElement
            v-for="({ name, svg }, index) in cryptoList"
            :key="index"
            :name="name"
          >
            <div class="h-16 flex items-center" v-html="svg"></div>
          </CryptoElement>
        </TransitionGroup>
      </div>
    </main>
  </div>
</template>

<style scoped>
.list-enter-active {
  transition: all 0.3s ease-out;
}

.list-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.list-enter-from,
.list-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>