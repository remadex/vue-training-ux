<script setup>
import { ref, computed } from "vue";
const inputList = ref([]);
const outputList = ref([]);
const input = ref({
  title: "",
  amount: "",
});
const output = ref({
  title: "",
  amount: "",
});

const inputValidate = computed(() => {
  return !input.value.title || !input.value.amount;
});

const total = computed(() => {
  const inputSum = inputList.value.reduce(
    (acc, current) => acc + current.amount,
    0
  );
  const outputSum = outputList.value.reduce(
    (acc, current) => acc + current.amount,
    0
  );

  return inputSum - outputSum;
});

const onSubmitInput = () => {
  inputList.value.push({
    title: input.value.title,
    amount: input.value.amount,
  });

  input.value = {
    title: "",
    amount: "",
  };
};

const onSubmitOutput = () => {
  outputList.value.push({
    title: output.value.title,
    amount: output.value.amount,
  });

  output.value = {
    title: "",
    amount: "",
  };
};

const onDelete = (type, index) => {
  if (type == "input") {
    inputList.value.splice(index, 1);
  } else {
    outputList.value.splice(index, 1);
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
      <div class="flex justify-around space-x-8">
        <div>
          <form class="border-b pb-4 mb-4" @submit.prevent="onSubmitInput">
            <h2 class="title secondary">Revenus</h2>
            <div class="flex items-center space-x-4">
              <div class="form-control input">
                <label for="title">Titre</label>
                <input type="text" id="title" v-model="input.title" />
              </div>
              <div class="form-control input">
                <label for="amount">montant</label>
                <input
                  type="number"
                  min="0"
                  id="amount"
                  v-model="input.amount"
                />
              </div>
            </div>
            <button
              type="submit"
              class="btn primary mt-4"
              :disabled="inputValidate"
            >
              Ajouter
            </button>
          </form>
          <ul>
            <li
              class="flex justify-between mt-2"
              v-for="({ title, amount }, index) in inputList"
              :key="index"
            >
              <div class="flex items-center">
                <button
                  type="button"
                  class="mr-3"
                  @click="onDelete('input', index)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="
                      h-6
                      w-6
                      text-orange-700
                      duration-100
                      hover:text-orange-800
                    "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                {{ title }}
              </div>
              <span class="font-semibold">{{ amount }}</span>
            </li>
          </ul>
        </div>
        <div>
          <form class="border-b pb-4 mb-4" @submit.prevent="onSubmitOutput">
            <h2 class="title secondary">Dépenses</h2>
            <div class="flex items-center space-x-4">
              <div class="form-control input">
                <label for="title">Titre</label>
                <input type="text" id="title" v-model="output.title" />
              </div>
              <div class="form-control input">
                <label for="amount">montant</label>
                <input
                  type="number"
                  min="0"
                  id="amount"
                  v-model="output.amount"
                />
              </div>
            </div>
            <!-- <button
              type="submit"
              class="btn primary mt-4"
              :disabled="
                !output.title || (!output.amount && output.amount !== 0)
              "
            >
              Ajouter
            </button> -->
            <button
              type="submit"
              class="btn primary mt-4"
              :disabled="!output.title || !output.amount"
            >
              Ajouter
            </button>
          </form>
          <ul>
            <li
              class="flex justify-between mt-2"
              v-for="({ title, amount }, index) in outputList"
              :key="index"
            >
              <div class="flex items-center">
                <button
                  type="button"
                  class="mr-3"
                  @click="onDelete('output', index)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="
                      h-6
                      w-6
                      text-orange-700
                      duration-100
                      hover:text-orange-800
                    "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                {{ title }}
              </div>
              <span class="font-semibold">{{ amount }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="
          mt-4
          border-t-2 border-emerald-600
          pt-4
          flex
          justify-center
          text-4xl
        "
        :class="{ 'text-red-500': total < 0 }"
      >
        {{ total }}€
      </div>
    </main>
  </div>
</template>
