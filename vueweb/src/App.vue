<template>
  <div>
    <!--v-on nasluchuje czy nastepuje emit z app-navbar, wysyla dane do updateView
     v-on:showMenuTab="updateView($event)"-->
    <app-navbar class="navbar" v-if="isLoggedIn"></app-navbar>
      <app-menutab v-if="$store.state.showMenu && isLoggedIn"></app-menutab>
      <app-returnbtn v-if="isLoggedIn && $router.currentRoute.name != 'home'"></app-returnbtn>
      <router-view class="pages"></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Menutab from './components/Menutab';
import ReturnBtn from './components/tabs/ReturnBtn'

export default {
  components: {
    'app-navbar': Navbar,
    'app-menutab': Menutab,
    'app-returnbtn': ReturnBtn
  },
  data(){
    return{
    }
  },
  methods:{
  },
  computed: {
    //zwraca zmienna isLoggedIn z getters
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
  },
}
</script>

<style>
*{
    font-family: 'Roboto', sans-serif;
    padding: 0;
}
.pages{
  margin-top: 50px;
}
body{
  margin:0px;
  padding:0px;
  background-color: #8A898D;
}
</style>

