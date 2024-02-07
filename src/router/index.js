import landingpage from "../Views/landingpage.vue";
import signin from "../Views/signin.vue";
import decks from "../Views/decks.vue";
import create from "../Views/create.vue";
import groups from "../Views/Groups.vue";
import account from "../Views/Account.vue";
import Upload from "../Views/Upload.vue";
/*import LearnDeck from "../Views/LearnDeck.vue";*/




const routes = [
  {path: '/', component: landingpage},
  {path: '/home', component: landingpage},
  {path: '/Sign-in', component: signin},
  {path: '/My_Deck', component: decks},
  /*{
    path: '/Deck/:name',
    name: 'LearnDeck',
    component: LearnDeck,
    props: true // Allows the id parameter to be passed as a prop to the DeckDetails component
  },*/
  
  {path: '/Generator', component: create},
  {path: '/Groups', component: groups},
  {path: '/Account', component: account},
  {path: '/Generator/Upload', component: Upload},
];
export default routes;