<!--Glowny panel operatorski-->

<template>
  <div id="app">
    <!--<div class="logo" v-show="!showMenu"></div> -->
    <!--v-on nasluchuje czy nastepuje emit z app-navbar, wysyla dane do updateView-->
    <app-navbar v-on:showMenuTab="updateView($event)"></app-navbar>
    <app-menutab v-if="showMenu"></app-menutab>
  </div>
</template>

<script>
import Navbar from './Navbar';
import Menutab from './Menutab';

export default {
  name: 'Main',
  components: {
    'app-navbar': Navbar,
    'app-menutab': Menutab
  },
  data(){
    return{
      showMenu: false
    }
  },
  methods:{
    //funkcja z event do sprawdzania czy ma wyswietlic menuTab (updaredView dowolna nazwa parametru
    //tu siedzi $event)
    updateView: function(updatedView){
      this.showMenu = updatedView;
    }
  }
}

</script>

<style>
/*umieszczenie loga na środku*/
/*
.logo{ 
  position: absolute;
  width: 426px;
  height: 206px;
  left: calc(50% - 426px/2);
  top: calc(50% - 206px/2);
  content: url("./assets/DSA_logo1shad.png");
  opacity: 0.2;
}*/
</style>
