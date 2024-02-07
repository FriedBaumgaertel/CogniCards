<template>
    <div  style="height: 20vh; width: 99vw; display: flex; justify-content: center;  padding-bottom: 7vh; padding-top: 5vh;">
            <div class="catchphrase">Coming Soon</div>
        </div>
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

<style scoped>
.catchphrase{
    font-family: Montserrat;
    font-size: 64px;
    font-weight: bold;
}
</style>