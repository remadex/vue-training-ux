<template>
  <div>
    <h1 class="text-4xl text-red-500">{{ title }}</h1>
    <button
      class="block mx-auto px-4 py-1 rounded bg-indigo-400 text-indigo-900"
      @click="showNewUselessFact"
    >
      Montre un fait inutile
    </button>
    <p class="mt-8" v-if="fact">{{ fact.text }}</p>
  </div>
</template>

<script>
export default {
  name: "FactsPage",
  data() {
    return {
      title: "Savoir inutile du jour",
      fact: "",
    };
  },
  mounted: async function () {
    const factRes = await fetch(
      "https://uselessfacts.jsph.pl/random.json?language=en"
    );
    const res = await factRes.json();
    this.fact = res;
    console.log(res);
  },
  methods: {
    showNewUselessFact: async function () {
      const factRes = await fetch(
        "https://uselessfacts.jsph.pl/random.json?language=en"
      );
      const res = await factRes.json();
      this.fact = res;
      console.log(res);
    },
  },
};
</script>
