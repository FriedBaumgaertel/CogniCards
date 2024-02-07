<template>
  <div class="center-container">
    <Card class="card-container" :front="currentCard.vorderseite" :back="currentCard.rueckseite" :flipped="flipped"
      @flip="flipped = !flipped" />
    <button @click="goToNextCard">Next</button>
    <div>{{ currentIndex + 1 }}/{{ cards.length }}</div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import { fetchCloudstore } from '../components/dataTransferHandler';
export default {
  components: {
    Card
  },
  data() {
    return {
      cards: [
        { vorderseite: 'Empty deck', rueckseite: 'Empty deck' },
        // Add more cards as needed
      ],
      currentIndex: 0,
      flipped: false
    };
  },
  computed: {
    currentCard() {
      return this.cards[this.currentIndex];
    }
  },
  methods: {
    goToNextCard() {
      if (this.currentIndex < this.cards.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // Loop back to the first card or handle as needed
      }
      this.flipped = false; // Reset the flip state for the new card
    },

  },
  mounted() {
    let token = sessionStorage.getItem("currentToken");
    console.log(token)
    fetchCloudstore("stacks", token).then((stack) => {
      if (stack.karten.length > 0) {
        this.cards = stack.karten;
      }
      console.log(stack.karten);
    });
  }
}
</script>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* Adjust as needed */
}

.card-container {
  /* Adjust the styling of the Card component to make it fill its container */
  width: 40vw;
  height: 60vh;
}
</style>