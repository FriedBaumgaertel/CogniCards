<template>
  <div class="card" @click="$emit('flip')">
    <div v-if="!flipped">{{ front }}</div>
    <div v-else>{{ back }}</div>
  </div>
</template>

<script>
export default {
  props: {
    front: String,
    back: String,
    flipped: Boolean
  }
}
</script>

<style>
.card {
  /* Add your card styling here */
  width: 200px;
  height: 300px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
</style>