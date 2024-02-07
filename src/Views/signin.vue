<template>
    <v-container fluid>
        <v-row>
            <!-- Left Half -->
            <v-col cols="6">
                <v-card text="left container for the image" variant="outlined">
                </v-card>
            </v-col>

            <!-- Right Half -->
            <v-col cols="6">
                <v-row>
                    <div>Sign in and start your learning experience today!</div>
                </v-row>
                <v-row>
                    <v-btn block rounded="xl" :prepend-icon="googleIcon"> Sign in with Google</v-btn>
                </v-row>
                <v-row>
                    <v-btn block rounded="xl" :prepend-icon="appleIcon">Sign in with Apple</v-btn>
                </v-row>
                <v-row>
                    <div>or</div>
                </v-row>
                <v-row>
                    <div>Register / Login with your E-Mail address</div>
                </v-row>
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