<template>
    <v-container fluid>
        <v-row>
            <!-- Left Half -->
            <v-col cols="6" >
                <div class="box">
                    <v-card text="" variant="outlined" style="height: 80vh; width: 40vw;">
                    </v-card>
                </div>
            </v-col>

            <!-- Right Half -->
            <v-col cols="6">
                <div  style=" width: 45vw; display: flex; justify-content: center;   padding-top: 5vh;">
                    <div class="catchphrase">Sign in and start your</div>
                </div>

                <div  style=" width: 45vw; display: flex; justify-content: center;  margin-bottom: 7vh; ">
                    <div class="catchphrase">learning experience today!</div>
                </div>
                
                
                <div style=" width: 45vw; display: flex; justify-content: center;   ">
                    <v-btn  variant="outlined"  rounded class="sign-in-button button text-transform-none"  style="height: 60px;">
                        <img src="/google.png" alt="Logo" class="logo" style="padding-bottom: 2px;"/> Sign in with Google</v-btn>
                </div>

                <div style=" width: 45vw; display: flex; justify-content: center;   padding-top: 1vh;">
                    <v-btn  variant="outlined" rounded class="sign-in-button button text-transform-none"  style="height: 60px;"> 
                        <img src="/apple-logo.png" alt="Logo" class="logo"/> Sign in with Apple</v-btn>
                </div>
                
                    


                
                <div style=" width: 45vw; display: flex; justify-content: center;   padding-top: 5vh; padding-bottom: 5vh ;">
                    or
                </div>

                <div style=" width: 45vw; display: flex; justify-content: center;   ">
                    Register / Login with your
                </div>

                <div style=" width: 45vw; display: flex; justify-content: center;    padding-bottom: 3vh ;">
                    E-Mail address
                </div>
                
                <div style=" width: 45vw; display: flex; justify-content: center;    ">
                    <v-row>
                        <v-expansion-panels>
                            <v-expansion-panel block rounded="xl">
                                <v-expansion-panel-title>
                                    <template v-slot:default="{ expanded }">
                                        <v-row no-gutters>
                                            <v-col cols="4" class="d-flex justify-start">
                                                Sign in with E-Mail
                                            </v-col>
                                            <v-col cols="8" class="text-grey">
                                                <v-fade-transition leave-absolute>
                                                    <span v-if="expanded" key="0">
                                                        Enter your Login information
                                                    </span>
                                                    <span v-else key="1">
                                                    </span>
                                                </v-fade-transition>
                                            </v-col>
                                        </v-row>
                                    </template>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <v-text-field label="Enter your E-mail" v-model="userName" @input="update('nn')"></v-text-field>
                                    <v-text-field label="Enter your password" v-model="userPW" @input="update('pw')"></v-text-field>
                                    <v-btn block rounded="xl" :disabled="!(has_nn && has_pw)" @click="login">Sign in</v-btn>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-row>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>


import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import { loginUser } from '../components/dataTransferHandler';
export default {
    data() {
        return {
            userName: "",
            userPW: "",
            googleIcon: google,
            appleIcon: apple,
            has_nn: false,
            has_pw: false,
        };
    },
    methods: {
        login() {
            loginUser(this.userName, this.userPW); //der spaß ist async :D
        },
        update(key) {
            if (key == "nn") {
                if (this.userName == "") {
                    this.has_nn = false;
                } else {
                    this.has_nn = true;
                }

            } else if (key == "pw") {
                if (this.userPW == "") {
                    this.has_pw = false;
                } else {
                    this.has_pw = true;
                }
            }
        }
    }
};
</script>


<style scoped>

.box{
    display: flex;
    align-items: end;

}


.catchphrase{
    font-family: Montserrat;
    font-size: 30px;
    font-weight: bold;
}


.sign-in-button {
  background-color: white ;
  color: black;
}

.button{
    font-family: Montserrat;
    font-size: 20px;
}

.logo {
  width: 33px;
  padding-bottom: 8px;
  margin-right: 10px;
  
}


</style>