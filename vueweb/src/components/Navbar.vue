<template>
    <div>
        <nav>
            <ul>
                <button v-on:click="menuOn" id="menu">
                    <img src="../assets/icons/view_headline_24px.svg" />
                </button>
                <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
            </ul>
        </nav>
    </div>
</template>

<script>

export default {
    data(){
        return{
            showMenu: false
        }
    },
    methods:{
        //wyświetlanie menuTab
        menuOn: function(){
            this.showMenu = !this.showMenu;
            //przesyla wartosc showMenu do app.vue
            this.$emit('showMenuTab', this.showMenu);
        },
        //funkcjonowanie wylogowywania
        logout: function () {
            this.$store.dispatch('logout')
            .then(() => {
            this.$router.push('/login')
            })
        }
    },
    computed : {
        //zwraca zmienna isLoggedIn z getters
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
}

</script>

<style scoped>
div{
    z-index: 1;
}
nav{
    position: fixed;
    height: 50px;
    width: 100%;
    background-color: #D63131;
}
#menu{
    outline: none;
    position: fixed;
    height: 50px;
    width: 50px;
    left: 0px;
    top: 0px;
    background-color: #D63131;
    border: 2px solid #6F6E73;
    border-radius: 0px 0px 10px 0px;
}
</style>
