<template>
  <div class="p-32 flex flex-col items-center justify-evenly w-full h-full gap-8">
    <div class="flex flex-row justify-between w-full">
      <h3>{{deckTitle}}</h3>
      <div>
        <button @click="generate=true" class="rounded-3xl w-20 border-[1px] border-black outline-0 bg-black h-8 rounded-r-none text-xs text-center" :class="{'bg-white text-black': generate, 'bg-black': !generate}">Generate</button>
        <button @click="generate=false" class="rounded-full w-20 border-[1px] border-black outline-0 bg-black h-8 rounded-l-none text-xs text-center" :class="{'bg-white text-black': !generate, 'bg-black': generate}">Manual</button>
      </div>
      <div></div>
    </div>
    <div
        class="drop-box flex justify-center items-center w-66 h-96 border-2 border-dashed border-gray-300 bg-gray-100"
        @dragover.prevent="handleDragOver"
        @drop.prevent="handleDrop"
        @dragenter.prevent="dragEnter"
        @dragleave.prevent="dragLeave"
        @click="openFileDialog"
    >
      <p v-if="!dragging">Drag and drop a file here, or click to select a file.</p>
      <p v-else>Release to drop the file.</p>
      <input type="file" ref="fileInput" @change="handleFileSelect" class="hidden" />
    </div>
    <div class="flex flex-row justify-between">
      <div></div>
      <button @click="createDeck" class="bg-blue rounded-full">Create</button>
    </div>
  </div>
</template>
<script setup>
import {read_input_data} from "../components/chatGPTHandler.js";
import {onMounted, ref} from 'vue'

let deckTitle = ref('Deck Title');
onMounted(() => {
  deckTitle.value = localStorage.getItem('title') || 'Deck Title';
});
let generate = ref(false);

const dragging = ref(false);
const fileInput = ref(null);
const files = ref(null);

const handleDragOver = (event) => {
  event.preventDefault(); // This is necessary to allow for a drop
};

const handleDrop = (event) => {
  files.value = event.dataTransfer.files;
  dragging.value = false; // Reset dragging state
};

const dragEnter = () => {
  dragging.value = true; // Visual feedback for drag area
};

const dragLeave = () => {
  dragging.value = false; // Reset visual feedback
};

const openFileDialog = () => {
  fileInput.value.click(); // Programmatically open the file dialog
};

const handleFileSelect = (event) => {
  files.value = event.target.files;
};

const createDeck = () => {
  if(files.value){
      console.log(files.value);
  read_input_data(files.value,"first A340 Page","this is completetly generated");
  }
}
</script>