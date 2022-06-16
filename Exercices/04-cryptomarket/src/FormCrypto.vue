<script setup>
import { ref, inject, computed } from "vue";
const emit = defineEmits(["onSubmit"]);
const { isLogged } = inject("login");

const cryptoValidate = computed(() => {
  return !crypto.value.name || !crypto.value.svg || !isLogged.value;
});

const crypto = ref({
  name: "",
  svg: "",
});

const submitForm = () => {
  emit("onSubmit", crypto.value);
  crypto.value = {
    name: "",
    svg: "",
  };
};
</script>

<template>
  <form class="shadow-md w-3/4 mx-auto p-8 my-4" @submit.prevent="submitForm">
    <div class="form-control input">
      <label for="name">Nom de la crypto</label>
      <input
        type="text"
        id="name"
        :disabled="!isLogged"
        v-model="crypto.name"
      />
    </div>
    <div class="form-control textarea">
      <label for="svg">SVG</label>
      <textarea
        name="svg"
        id="svg"
        rows="10"
        :disabled="!isLogged"
        v-model="crypto.svg"
      ></textarea>
    </div>
    <button type="submit" :disabled="cryptoValidate" class="mt-4 btn primary">
      Ajouter
    </button>
  </form>
</template>