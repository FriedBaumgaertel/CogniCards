<script>
import DROPAREA from './components/droparea.vue';
import { postCloudstore, fetchCloudstore } from './components/dataTransferHandler.js';

export default {
  data() {
    return {
    };
  },
  components: {
    DROPAREA,
  },
  methods: {
    post_s() {
      postCloudstore("stacks", "");
    },
    get_s() {
      fetchCloudstore("stacks");
    },
    post_u() {
      postCloudstore("user", "");
    },
    get_u() {
      fetchCloudstore("user");
    },
    post_g() {
      postCloudstore("groups", "");
    },
    get_g() {
      fetchCloudstore("groups");
    },
  },
};
</script>

<template>
  <div>
    <button @click="post_s">POST-stacks</button>
    <button @click="get_s">FETCH-stacks</button>
    <button @click="post_u">POST-user</button>
    <button @click="get_u">FETCH-user</button>
    <button @click="post_g">POST-groups</button>
    <button @click="get_g">FETCH-groups</button>
  </div>
  <DROPAREA />
</template>

<style scoped>
/* Apply margin or padding as needed */
div {
  margin-top: 20px;
  /* Adjust the value according to your preference */
}

/* You can also apply styles directly to the buttons if needed */
button {
  margin-right: 10px;
  /* Adjust the value according to your preference */
}
</style>
