<template>
    <div style="height: 93vh; width: 100vw; background-color: #F3F3F3;">
        <div>
            <input v-model="userName" placeholder="Enter text" />
            <p>Username: {{ userName }}</p>
        </div>
        <div>
            <input v-model="userPW" placeholder="Enter text" />
            <p>Passwort: {{ userPW }}</p>
        </div>
        <div>
            <button @click="login">Log in</button>
            <p>Logged in? : {{ userLN }}</p>
        </div>

        <hr />

        <div>
            <input v-model="stackName" placeholder="Enter text" />
            <p>New Stack Name: {{ stackName }}</p>
        </div>
        <div>
            <input v-model="desc" placeholder="Enter text" />
            <p>Description: {{ desc }}</p>
        </div>
        <div>
            <button @click="addStack">Add the stack to the server</button>
        </div>

        <hr />

        <div>
            <input v-model="token" placeholder="Enter text" />
            <p>TOKEN to stack: {{ token }}</p>
        </div>
        <div>
            <input v-model="front" placeholder="Enter text" />
            <p>Front side: {{ front }}</p>
        </div>
        <div>
            <input v-model="back" placeholder="Enter text" />
            <p>Back side: {{ back }}</p>
        </div>
        <div>
            <button @click="addCard">Add card to stack</button>
        </div>

        <hr />

        <div>
            <input v-model="token" placeholder="Enter text" />
            <p>TOKEN to stack: {{ token }}</p>
        </div>
        <div>
            <input v-model="front" placeholder="Enter text" />
            <p>Modified Front side: {{ front }}</p>
        </div>
        <div>
            <input v-model="back" placeholder="Enter text" />
            <p>Modified Back side: {{ back }}</p>
        </div>
        <div>
            <input v-model="idx" placeholder="Enter text" />
            <p>index: {{ idx }}</p>
        </div>
        <div>
            <button @click="modCard">Modify card at idx = {{ idx }}</button>
        </div>

        <hr/>

        <DROPAREA/>
    </div>
</template>

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