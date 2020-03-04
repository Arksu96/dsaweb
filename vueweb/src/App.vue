<template>
  <div id="app">
    <!--v-on nasluchuje czy nastepuje emit z app-navbar, wysyla dane do updateView-->
    <app-navbar v-on:showMenuTab="updateView($event)"></app-navbar>
    <app-menutab v-if="showMenu"></app-menutab>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Menutab from './components/Menutab';

export default {
  name: 'App',
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
body{
  margin:0px;
  padding:0px;
  background-color: #8A898D;
}
/*umieszczenie loga na środku*/
/*#app{ 
  position: absolute;
  width: 426px;
  height: 206px;
  left: calc(50% - 426px/2);
  top: calc(50% - 206px/2);
  content: url("./assets/DSA_logo1shad.png");
  opacity: 0.2;
}*/
</style>
