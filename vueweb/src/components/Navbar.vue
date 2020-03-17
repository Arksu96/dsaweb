<template>
    <div>
        <nav>
            <ul>
                <button v-on:click="menuOn" id="menu">
                    <img src="../assets/icons/view_headline_24px.svg" />
                </button>
                <span v-if="isLoggedIn" class="logout-bnt">
                    <a @click="logout">Wyloguj</a>
                </span>
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
.logout-bnt{
    float: right;
    margin: 0px 15px;
    color: #ffffffb2;
    cursor: pointer;
    text-decoration: none;
    list-style: none;
}
.logout-bnt a:hover{
    color: #ffffff;
}
.logout-bnt a::before{
    content: "";
    display: block;
    height: 5px;
    width: 59.63px;
    background-color: #ffffff;
    position: absolute;
    top: 0;
    width: 0%;
    transition: all ease-in-out 250ms;
}
.logout-bnt a:hover::before{
    width: 59.63px;
}

</style>
