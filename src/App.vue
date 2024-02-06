<template>
  
  <VLayout row wrap rounded rounded-md align-start>

    <!-- App-Bar mit Menüsymbol und Titel -->
    <v-app-bar app class="white-background" rounded>
      <div class="flexbox">
        <v-btn text link to="/Generator" :class="{ 'font-bold': isActive('/Generator') }">
          Generator
        </v-btn>
          <v-btn text link to="/My_Deck" :class="{ 'font-bold': isActive('/My_Deck') }">
          My Deck
        </v-btn>
        
        
        <v-btn text link to="/home" class="logo-button">
          <img src="/Logo.png" alt="Logo" class="logo"/>
        </v-btn>
        
        <v-btn text link to="/Groups" :class="{ 'font-bold': isActive('/Groups') }">
          Groups
        </v-btn>
        <v-btn text link to="/Account" :class="{ 'font-bold': isActive('/Account') }">
          Account
        </v-btn>
      </div>

        <v-btn link to="/Sign-in" rounded dark class="sign-in-button"  >
          Sign In
        </v-btn>
    </v-app-bar>

    

    
    <VMain>
      <RouterView></RouterView>
    </VMain>
  </VLayout>
</template>

<script>
export default {
  methods: {
    isActive(route) {
      return this.$route.path === route;
    }
  }
};
</script>



<script setup>
//imports
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { computed } from 'vue'
import { useDisplay } from 'vuetify'
  
// Dynamische Berechnung der Bildschirmgröße
const { name } = useDisplay()

const isMini = computed(() => {
  switch (name.value) {
    case 'xs': return true
    case 'sm': return false
    case 'md': return false
    case 'lg': return false
    case 'xl': return false
    case 'xxl': return false
  }
})


// Refs für den Drawer-Status und die aktuelle Route
const drawer = ref(false)
const route = useRoute()
const router = useRouter()

// Methode zum Schließen des Drawers bei Navigation
const handleNavigation = () => {
  drawer.value = false
}



</script>

<style scoped>

@font-face {
  font-family: "Lobster";
  src: url("@/assets/fonts/Lobster-Regular.ttf") format("truetype");
}

/*Style für alle weißen Elemente */
.white-background {
  background-color: #ffffff; 
}

/*Style für Name der Website */
.titel-schriftzug {
  text-align: center;
  display: grid;
  place-items: center;
  background-color: white;
  font-family: Lobster;
  font-size: x-large;
}

/*Style für Container des Website Titels */
.titel-container {
  width:100%;
  background-color: rgb(255, 255, 255);
  
}

/*Style für container des logos */
.logo-container {
  padding: 16px;
}

/*Style für Logo */
.logo {
  width: 55px;
  
}

/*Style für Container des Hintergrundbildes */
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

/*Style für Hintergrundbild, bei großen Bildschirmen */
.background-image {
  background-image: url(https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: c;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
}

/*Style für Hintergrundbild, bei kleinen Bildschirmen */
.background-small{
  background-image: url(https://images.unsplash.com/photo-1506891536236-3e07892564b7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
}


.flexbox{
  display: flex;
  justify-content: space-around;
  width: 80vw;
  align-items: center;
  margin-left: 10vw;
}

.logo-button {
  padding: 0; /* Entfernt den zusätzlichen Innenabstand des Buttons */
  display: flex;
  align-items: center; /* Zentriert das Bild vertikal */
}



.sign-in-button {
  background-color: #008FE0;
  color: white;
}

.font-bold {
  font-weight: bold;
}


</style>
