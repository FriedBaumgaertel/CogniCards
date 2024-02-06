<template>
  <!-- Hintergrundcontainer mit unterschiedlichen Hintergrundbildern für verschiedene Bildschirmgrößen -->
  <div class="background-container">
      <div v-if="isMini" class ="background-small"></div>
      <div v-else class="background-image"></div>
      
  </div>

  <!-- Hauptlayout mit App-Bar, Navigationsleiste, Hauptinhalt und dynamischer Routeransicht -->
  <VLayout row wrap rounded rounded-md align-start>

    <!-- App-Bar mit Menüsymbol und Titel -->
    <VAppBar rounded class="white-background">
      <VAppBarNavIcon variant="text" @click.stop="drawer = !drawer"/>

      <!-- Toolbar Titel -->
      <div class="titel-container"> 
        <v-toolbar-title class="titel-schriftzug">CatMemeGenerator</v-toolbar-title>
      </div>
    </VAppBar>

    <!-- Navigationsleiste (Drawer) für kleine Bildschirme -->
    <v-navigation-drawer
      v-if="isMini"
      v-model="drawer"
      location="top"
      temporary
      class="white-background"
    >

      <v-list>
        <!-- Navigationspunkte-->
        <VListItem prepend-icon="mdi-home" link to="/home" @click="handleNavigation">
          Home
        </VListItem>
        <VListItem prepend-icon="mdi-image" link to="/MeowsterpeaceGallery" @click="handleNavigation">
          Meowsterpeace Gallery
        </VListItem>
        <VListItem prepend-icon="mdi-paw" link to="/CatMemeGenerator" @click="handleNavigation">
          CatMemeGenerator
        </VListItem>
        <VListItem prepend-icon="mdi-help-circle" link to="/CommonCuriosities" @click="handleNavigation">
          FAQ
        </VListItem>
        </v-list>
      </v-navigation-drawer>

    <!-- Navigationsleiste (Drawer) für größere Bildschirme -->
    <VNavigationDrawer v-else v-model="drawer" class="white-background">
      <VList>
        <!-- Navigationspunkte -->
        <VListItem prepend-icon="mdi-home" link to="/home" @click="handleNavigation">
          Home
        </VListItem>
        <VListItem prepend-icon="mdi-image" link to="/MeowsterpeaceGallery" @click="handleNavigation">
          Meowsterpeace Gallery
        </VListItem>
        <VListItem prepend-icon="mdi-paw" link to="/CatMemeGenerator" @click="handleNavigation">
          CatMemeGenerator
        </VListItem>
        <VListItem prepend-icon="mdi-help-circle" link to="/CommonCuriosities" @click="handleNavigation">
          FAQ
        </VListItem>
      </VList>

      <!-- Logo am unteren Ende -->
      <v-divider></v-divider>
      <v-row justify="center" align="center" class="logo-container">
        <img src="@/assets/Logos/cat-meme-generator_logo.png" alt="Logo" class="logo"/>
      </v-row>
    </VNavigationDrawer>

    <!-- Hauptinhalt (Router-Ansicht) -->
    <VMain>
      <RouterView></RouterView>
    </VMain>
  </VLayout>
</template>

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
  width: 175px;
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

</style>
