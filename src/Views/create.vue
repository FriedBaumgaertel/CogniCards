<template>
  <div class="p-24 pl-32 flex flex-col">
    <h1 class="text-6xl mb-14 font-bold">Create a Deck</h1>
    <input class="outline-none mb-6 text-2xl font-semibold" type="text" placeholder="Enter a Title..." v-model="title"
      @input="saveToLocalStorage('titel', title)"></input>
    <input class="outline-none mb-14 text-2xl font-semibold" type="text" placeholder="Enter a Description..."
      v-model="description" @input="saveToLocalStorage('description', description)"></input>
    <button @click="$router.push('Generator/Upload')"
      :class="{ 'bg-white text-black order-0 focus:border-0 font-bold': !(has_title && has_description), 'bg-blue text-white border-0 focus:border-0 font-bold': (has_title && has_description) }"
      :disabled="!(has_title && has_description)">Continue</button>
  </div>
</template>
<script setup>
import { ref, watchEffect, onMounted} from 'vue';
import { useRouter } from 'vue-router';
import { get_session_data_item } from "../components/crossPagePersistence.js";

const title = ref('');
const description = ref('');
const has_title = ref(false);
const has_description = ref(false);

const router = useRouter();

  onMounted(() => {
    console.log("piep")
    let logged_in = get_session_data_item("logged_in");
    if (!logged_in) {
      router.push('/Sign-in');
    }
  });
// Load initial values from localStorage
watchEffect(() => {
  title.value = localStorage.getItem('title') || '';
  description.value = localStorage.getItem('description') || '';
});

const saveToLocalStorage = (key, value) => {
  sessionStorage.setItem(key, value);
  if (key == "titel") {
    if (value == "") {
      has_title.value = false;
    } else {
      has_title.value = true;
    }

  } else if (key == "description") {
    if (value == "") {
      has_description.value = false;
    } else {
      has_description.value = true;
    }
  }

  
};
</script>