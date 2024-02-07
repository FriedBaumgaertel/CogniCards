<template>
  <div>
    <Card
        :front="currentCard.front"
        :back="currentCard.back"
        :flipped="flipped"
        @flip="flipped = !flipped"
    />
    <button @click="goToNextCard">Next</button>
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  components: {
    Card
  },
  data() {
    return {
      cards: [
        { front: 'Front 1', back: 'Back 1' },
        { front: 'Front 2', back: 'Back 2' },
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
    }
  }
}
</script>