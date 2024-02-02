<script>
import {read_input_data} from "./chatGPTHandler"
export default {
  data() {
    return {

    };
  },
  methods: {
    handleDrop(event) {
      read_input_data(event);
    },
  }
}
</script>

<template>
  <div class="image-uploader" @dragover.prevent @drop="handleDrop">
    Drop your .txt file here
  </div>
</template>

