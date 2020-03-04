<template>
  <div id="app">
    <app-navbar></app-navbar>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    'app-navbar': Navbar
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
