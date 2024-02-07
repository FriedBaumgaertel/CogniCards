<template>
    <div></div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from 'vue-router';
import { get_session_data_item } from "../components/crossPagePersistence.js";

const router = useRouter();

onMounted(() => {
  let logged_in = get_session_data_item("logged_in");
  if(!logged_in){
    router.push('/Sign-in');
  }});
</script>