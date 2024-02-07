<template>
    <div style="height: 95vh; width: 99vw; background-color: #f3f3f3;">
        
        <v-row>
            <v-col cols="7" style="padding-left: 10vw; padding-top: 10vh;">

                <div v-if="isMini === 'lg'" class="catchphrase" style="margin-top: 5vh;">Study More Efficient </div>
                <div v-else="isMini === 'md'" class="catchphrasesmall" style="margin-top: 5vh;">Study More Efficient </div>
                <div v-if="isMini === 'lg'" class="catchphrase">With CogniCards</div>
                <div v-if="isMini === 'md'" class="catchphrasesmall">With CogniCards</div>
                <div v-if="isMini === 'lg'" class="second-catchphrase" style="margin-top: 3vh; margin-bottom: 6vh;">Generate ready-to-study flash cards in seconds. </div>
                <div v-if="isMini === 'md'" class="second-catchphrasesmall" style="margin-top: 3vh; margin-bottom: 6vh;">Generate ready-to-study flash cards in seconds. </div>
                <v-btn v-if="isMini === 'lg'" link to="/Sign-in" rounded class="sign-in-button button text-transform-none"  style="height: 45px;">
                    Get Started
                </v-btn>
                <v-btn v-if="isMini === 'md'" link to="/Sign-in" rounded class="sign-in-button buttonsmall text-transform-none"  style="height: 35px;">
                    Get Started
                </v-btn>
            </v-col> 

            <v-col cols="5" style="padding-right: 10px ;">
                <img src="	/cards4.png" style=" align-items: end;">

            </v-col>
        </v-row>
        

        

    </div>

    <div v-if="isMini === 'lg'" style="height: 50vh; width: 99vw; display: flex; justify-content: center; padding-top: 20vh; padding-bottom: 20vh;">
        <div class="catchphrase">Why CogniCards?</div>
    </div>
    <div v-if="isMini === 'md'" style="height: 50vh; width: 99vw; display: flex; justify-content: center; padding-top: 20vh; padding-bottom: 20vh;">
        <div class="catchphrasesmall">Why CogniCards?</div>
    </div>

    <v-row>
        <v-col cols="4">
            <v-card class="mx-auto" max-width="344" hover>
                <v-card-item style="padding-bottom: 20px;">
                    <v-card-title class="title-container" >
                        <span>Fast</span>
                    </v-card-title>
                
                </v-card-item>

                <v-card-text>
                    Generate a full stack of flash cards in seconds using our cutting-edge AI systems. Simply upload a PDF or DOCX file.
                </v-card-text>
            </v-card>

        </v-col>

        <v-col cols="4">
            <v-card class="mx-auto" max-width="344" hover>
                <v-card-item style="padding-bottom: 20px;">
                    <v-card-title class="title-container" >
                        <span>Individuell</span>
                    </v-card-title>
                
                </v-card-item>

                <v-card-text>
                    Not fully satisfied with the AI-generated cards? Easily edit, create or delete decks or individual cards.
                </v-card-text>
            </v-card>

        </v-col>

        <v-col cols="4">
            <v-card class="mx-auto" max-width="344" hover>
                <v-card-item style="padding-bottom: 20px;">
                    <v-card-title class="title-container" >
                        <span>Shareable</span>
                    </v-card-title>
                
                </v-card-item>

                <v-card-text>
                    No need to send the same APK files. Simply create a Group and invite up to 100 people to collaborate on a deck.
                </v-card-text>
            </v-card>

        </v-col>

    </v-row>

    <div v-if="isMini === 'lg'" style="height: 35vh; width: 99vw; display: flex; justify-content: center; padding-top: 20vh; padding-bottom: 5vh;">
        <div class="catchphrase">CogniCards for all of us:</div>
    </div>
    <div v-if="isMini === 'md'" style="height: 35vh; width: 99vw; display: flex; justify-content: center; padding-top: 20vh; padding-bottom: 5vh;">
        <div class="catchphrasesmall">CogniCards for all of us:</div>
    </div>


    <v-row>
        <v-col cols="4">
            <v-card class="mx-auto" max-width="344" hover>
                <v-card-item style="padding-bottom: 10px;">
                    <v-img src="Rectangle 51.png" max-height="300px" cover style="margin-bottom: 10px;"></v-img>
                    <v-card-title class="title-container2" >
                        <span>Students</span>
                    </v-card-title>
                
                </v-card-item>

                <v-card-text>
                    Who want to transform their dozens upon dozens of PDF files into neatly organized flash cards, without ever having to touch a keyboard.
                </v-card-text>
            </v-card>

        </v-col>

        <v-col cols="4">
            <v-card class="mx-auto" max-width="344" hover>
                <v-card-item style="padding-bottom: 10px;">
                    <v-img src="Rectangle 48.png" max-height="300px" cover style="margin-bottom: 10px;"></v-img>
                    <v-card-title class="title-container2" >
                        <span>Students</span>
                    </v-card-title>
                
                </v-card-item>

                <v-card-text>
                    Who want to transform their dozens upon dozens of PDF files into neatly organized flash cards, without ever having to touch a keyboard.
                </v-card-text>
            </v-card>

        </v-col>

        <v-col cols="4">
            <v-card class="mx-auto" max-width="344" hover>
                <v-card-item style="padding-bottom: 10px;">
                    <v-img src="Rectangle 46.png" max-height="300px" cover style="margin-bottom: 10px;"></v-img>
                    <v-card-title class="title-container2" >
                        <span>Classes</span>
                    </v-card-title>
                
                </v-card-item>

                <v-card-text>
                    That want to make their studying collaborative by creating shareable decks of cards for everyone to take advantage of.
                </v-card-text>
            </v-card>

        </v-col>

    </v-row>

    <div style="height: 30vh; width: 99vw; display: flex; justify-content: center; padding-top: 12vh; padding-bottom: 12vh;">
        <v-btn v-if="isMini === 'lg'" link to="/Sign-in" rounded class="sign-in-button button text-transform-none"  style="height: 45px; width: 250px;">
            Get Started
        </v-btn>
        <v-btn v-if="isMini === 'md'" link to="/Sign-in" rounded class="sign-in-button buttonsmall text-transform-none"  style="height: 35px; width: 200px;">
            Get Started
        </v-btn>
    </div>


    <div v-if="isMini === 'lg'" style="height: 15vh; width: 99vw; display: flex; justify-content: center;  padding-bottom: 5vh;">
        <div class="catchphrase">Frequently asked Questions</div>
    </div>
    <div v-if="isMini === 'md'" style="height: 15vh; width: 99vw; display: flex; justify-content: center;  padding-bottom: 5vh;">
        <div class="catchphrasesmall">Frequently asked Questions</div>
    </div>

    <div style="height: 30vh; width: 99vw; display: flex; justify-content: center;  padding-bottom: 5vh;">
        <div style="width: 80vw;">  
            <v-expansion-panels>
                <v-expansion-panel> 
                    <v-expansion-panel-title style="font-weight: bold;">
                        How does CogniCards generate my flash cards?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                    </v-expansion-panel-text>

                </v-expansion-panel>
                   
                <v-expansion-panel> 
                    <v-expansion-panel-title style="font-weight: bold;">
                        How much does CogniCards cost?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                    </v-expansion-panel-text>

                </v-expansion-panel>

                <v-expansion-panel> 
                    <v-expansion-panel-title style="font-weight: bold;">
                        Will I be able to share flash cards with my class?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                    </v-expansion-panel-text>

                </v-expansion-panel>
                    
            </v-expansion-panels>
        </div>

        <hr/>

        <DROPAREA/>
    </div>


    <div v-if="isMini === 'lg'" style="height: 120vh; width: 99vw; background-color: #f3f3f3;">

        <div v-if="isMini === 'lg'" style="height: 20vh; width: 99vw; display: flex; justify-content: center;  padding-bottom: 7vh; padding-top: 5vh;">
            <div class="catchphrase">The Team</div>
        </div>
        <div v-if="isMini === 'md'" style="height: 20vh; width: 99vw; display: flex; justify-content: center;  padding-bottom: 7vh; padding-top: 5vh;">
            <div class="catchphrasesmall">The Team</div>
        </div>
        <v-row>
        <v-col cols="6">
            <v-card class="mx-auto" max-width="344" hover>
                <v-card-item style="padding-bottom: 10px;">
                    <v-img src="User.png" max-height="300px" cover style="margin-bottom: 10px;"></v-img>
                    <v-card-title class="title-container" >
                        <span>M. Schauer</span>
                    </v-card-title>
                
                </v-card-item>

                <v-card-text class="Jobs">
                    Data Dev
                </v-card-text>
            </v-card>

        </v-col>

        <v-col cols="6">
            <v-card class="mx-auto" max-width="344" hover>
                <v-card-item style="padding-bottom: 10px;">
                    <v-img src="User.png" max-height="300px" cover style="margin-bottom: 10px;"></v-img>
                    <v-card-title class="title-container" >
                        <span>J. Bück</span>
                    </v-card-title>
                
                </v-card-item>

                <v-card-text class="Jobs">
                    Design Dev
                </v-card-text>
            </v-card>

        </v-col>

        <v-col cols="6">
            <v-card class="mx-auto" max-width="344" hover>
                <v-card-item style="padding-bottom: 10px;">
                    <v-img src="User.png" max-height="300px" cover style="margin-bottom: 10px;"></v-img>
                    <v-card-title class="title-container" >
                        <span>L. Runge</span>
                    </v-card-title>
                
                </v-card-item>

                <v-card-text class="Jobs">
                    Landing Page Dev
                </v-card-text>
            </v-card>

        </v-col>

        <v-col cols="6">
            <v-card class="mx-auto" max-width="344" hover>
                <v-card-item style="padding-bottom: 10px;">
                    <v-img src="User.png" max-height="300px" cover style="margin-bottom: 10px;"></v-img>
                    <v-card-title class="title-container" style="font-size: 30px;">
                        <span>F. Baumgärtel</span>
                    </v-card-title>
                
                </v-card-item>

                <v-card-text class=" Jobs">
                    Ui Dev
                </v-card-text>
            </v-card>

        </v-col>

    </v-row>
        

        

    </div>


    <div v-if="isMini === 'md'" style="height: 160vh; width: 99vw; background-color: #f3f3f3;">

        <div v-if="isMini === 'lg'" style="height: 20vh; width: 99vw; display: flex; justify-content: center;  padding-bottom: 7vh; padding-top: 5vh;">
            <div class="catchphrase">The Team</div>
        </div>
        <div v-if="isMini === 'md'" style="height: 20vh; width: 99vw; display: flex; justify-content: center;  padding-bottom: 7vh; padding-top: 5vh;">
            <div class="catchphrasesmall">The Team</div>
        </div>
        <v-row>
        <v-col cols="6">
            <v-card class="mx-auto" max-width="344" hover>
                <v-card-item style="padding-bottom: 10px;">
                    <v-img src="User.png" max-height="300px" cover style="margin-bottom: 10px;"></v-img>
                    <v-card-title class="title-container" >
                        <span>M. Schauer</span>
                    </v-card-title>
                
                </v-card-item>

                <v-card-text class="Jobs">
                    Data Dev
                </v-card-text>
            </v-card>

        </v-col>

        <v-col cols="6">
            <v-card class="mx-auto" max-width="344" hover>
                <v-card-item style="padding-bottom: 10px;">
                    <v-img src="User.png" max-height="300px" cover style="margin-bottom: 10px;"></v-img>
                    <v-card-title class="title-container" >
                        <span>J. Bück</span>
                    </v-card-title>
                
                </v-card-item>

                <v-card-text class="Jobs">
                    Design Dev
                </v-card-text>
            </v-card>

        </v-col>

        <v-col cols="6">
            <v-card class="mx-auto" max-width="344" hover>
                <v-card-item style="padding-bottom: 10px;">
                    <v-img src="User.png" max-height="300px" cover style="margin-bottom: 10px;"></v-img>
                    <v-card-title class="title-container" >
                        <span>L. Runge</span>
                    </v-card-title>
                
                </v-card-item>

                <v-card-text class="Jobs">
                    Landing Page Dev
                </v-card-text>
            </v-card>

        </v-col>

        <v-col cols="6">
            <v-card class="mx-auto" max-width="344" hover>
                <v-card-item style="padding-bottom: 10px;">
                    <v-img src="User.png" max-height="300px" cover style="margin-bottom: 10px;"></v-img>
                    <v-card-title class="title-container" style="font-size: 30px;">
                        <span>F. Baumgärtel</span>
                    </v-card-title>
                
                </v-card-item>

                <v-card-text class=" Jobs">
                    Ui Dev
                </v-card-text>
            </v-card>

        </v-col>

        </v-row>




    </div>



</template>

<<<<<<< HEAD

<script setup>

import { ref, computed, onBeforeUnmount, onMounted, reactive } from "vue";
import { useDisplay } from 'vuetify'


  
/* Verwendung von Vuetify useDisplay für das Reagieren auf Bildschirmgrößenänderungen */
const { name } = useDisplay()

const isMini = computed(() => {
  switch (name.value) {
    case 'xs': return "md"
    case 'sm': return "md"
    case 'md': return "md"
    case 'lg': return "lg"
    case 'xl': return "lg"
    case 'xxl': return "lg"
  }
})
</script>


<style scoped>
.catchphrase{
    font-family: Montserrat;
    font-size: 64px;
    font-weight: bold;
}


.catchphrasesmall{
    font-family: Montserrat;
    font-size: 50px;
    font-weight: bold;
}
.second-catchphrase{
    font-family: Montserrat;
    font-size: 40px;
    
}

.second-catchphrasesmall{
    font-family: Montserrat;
    font-size: 30px;
    
}

.sign-in-button {
  background-color: #008FE0 ;
  color: white;
}

.button{
    font-family: Montserrat;
    font-size: 20px;
}

.buttonsmall{
    font-family: Montserrat;
    font-size: 15px;
}

.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 30px;
}

.title-container2 {
  
  font-family: Montserrat;
  font-weight: bold;
  font-size: 30px;
}


.Jobs{
    display: flex;
    justify-content: center;
}

</style>
=======
<script>
import { loginUser, createNewStack, addCardToStack, modifyCardInStack } from "../components/dataTransferHandler";
import { get_session_data_item } from "../components/crossPagePersistence";
import DROPAREA from "../components/droparea.vue"
export default {
    data() {
        return {
            userName: "dummy",
            userPW: "dummy_password",
            userLN: false,
            desc: "",
            stackName: "",
            token: "5281e3a6-d45b-49a2-8e1f-9a683617f2da",
            front: "",
            back: "",
            idx: 0,
        };
    },
    methods: {
        login() {
            loginUser(this.userName, this.userPW); //der spaß ist async :D
            this.userLN = get_session_data_item("logged_in"); // der hier eigentlich auch, aber so schnell dass es keine probleme macht
        },
        addStack() {
            createNewStack(this.stackName, this.desc);
        },
        addCard() {
            addCardToStack(this.token, this.front, this.back);
        },
        modCard(){
            modifyCardInStack(this.token, this.front, this.back, this.idx);
        }
    },
    components: {
        DROPAREA,
    }
};
</script>
>>>>>>> 42670634a213cd791f9a3ebe239c79beb9e70e78
