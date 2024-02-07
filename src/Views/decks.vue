<template>
  <div class="p-32 flex flex-col justify-evenly w-full h-full gap-8">
    <h1>Your Decks</h1>
    <div class="grid grid-cols-3 gap-4">
      <li class="rounded-md p-4 shadow-md shadow-gray-400 w-5/6 h-52 flex flex-col justify-between items-center"
        v-for="deck in decks" :key="deck.name">
        <h2 class="font-bold text-xl">{{ deck.name }}</h2>
        <button class="bg-blue w-3/4 rounded-full" link to="/Learn"
          @click="navigateToDeck(deck.name, deck.token)">Start</button>
      </li>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { fetchCloudstore } from "../components/dataTransferHandler.js";
import { get_session_data_item } from "../components/crossPagePersistence.js";
import { useRouter } from 'vue-router';

const router = useRouter();
let decks = ref([]);

onMounted(() => {
  let logged_in = get_session_data_item("logged_in");
  if(!logged_in){
    router.push('/Sign-in');
  }

  let tokens = get_session_data_item("tokens");
  let token = "";
  for (const val_idx in tokens) {
    token = tokens[val_idx].token;
    console.log(token);
    fetchCloudstore("stacks", token)
      .then((deck) => {
        decks.value.push({ "name": tokens[val_idx].name, "deck": deck, token: tokens[val_idx].token });
      });
  }
}
)

// Method to navigate to the DeckDetails page with the deck ID
const navigateToDeck = (name, token) => {
  sessionStorage.setItem("currentToken",token);
  router.push('/Learn');
};
</script>