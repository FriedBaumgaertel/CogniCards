import landingpage from "../Views/landingpage.vue";
import signin from "../Views/signin.vue";
import decks from "../Views/decks.vue";
import create from "../Views/create.vue";
import groups from "../Views/Groups.vue";
import account from "../Views/Account.vue";




const routes = [
  {path: '/', component: landingpage},
  {path: '/home', component: landingpage},
  {path: '/Sign-in', component: signin},
  {path: '/My_Deck', component: decks},
  {path: '/Generator', component: create},
  {path: '/Groups', component: groups},
  {path: '/Account', component: account},
];
export default routes;