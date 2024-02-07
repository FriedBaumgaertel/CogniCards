<template>
  <div class="p-24 pl-32 flex flex-col">
    <h1 class="text-6xl mb-14 font-bold">Create a Deck</h1>
    <input class="outline-none mb-6 text-2xl font-semibold" type="text" placeholder="Title..." v-model="title" @input="saveToLocalStorage('title', title)"></input>
    <input class="outline-none mb-14 text-2xl font-semibold" type="text" placeholder="Description..." v-model="description" @input="saveToLocalStorage('description', description)"></input>
    <button @click="$router.push('Generator/Upload')" class="bg-blue text-white border-0 focus:border-0 font-bold">Continue</button>
  </div>
</template>
<script setup>
import { ref, watchEffect } from 'vue';

const title = ref('');
const description = ref('');

// Load initial values from localStorage
watchEffect(() => {
  title.value = localStorage.getItem('title') || '';
  description.value = localStorage.getItem('description') || '';
});

const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
</script>