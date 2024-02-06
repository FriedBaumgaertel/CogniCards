import './assets/main.css'
// Importieren der notwendigen Funktionen aus Vue und Vue Router
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import routes from './router/index.js'

// Vue Router erstellen und konfigurieren
const router = createRouter({
    mode: "hash",
    history: createWebHashHistory(), // Verwendung von Hash-History für einfache Konfiguration
    routes, // Kurzschreibweise für `routes: routes`
})

// Import von Vuetify-Stilen und -Komponenten
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from "vuetify/lib/iconsets/mdi"
import colors from 'vuetify/util/colors'

// Erstellen und Konfigurieren von Vuetify
const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.indigo.darken3, // Primärfarbe
                    secondary: colors.red.lighten4, // Sekundärfarbe
                }
            },
        },
    },
    icons: {
        defaultSet: "mdi", // Verwendung des Material Design Icons-Sets als Standard
        aliases,
        sets: {
            mdi,
        },
    },
})

// Erstellen der Vue-Instanz, Hinzufügen von Router und Vuetify, Montieren der App am DOM-Element mit der ID 'app'
const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')