<script setup>
defineProps(["name"]);
</script>

<template>
  <div class="rounded-xl p-8 shadow bg-white flex items-center">
    <slot></slot>
    <h2 class="ml-8 text-3xl text-emerald-600">{{ name }}</h2>
  </div>
</template>