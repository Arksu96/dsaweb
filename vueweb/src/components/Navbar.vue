<template>
    <div>
        <nav>
            <ul>
                <button v-on:click="menuOn" id="menu">
                    <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.125V0H25V3.125H0ZM0 9.375H25V6.25H0V9.375ZM25 15.625H0V12.5H25V15.625ZM25 21.875H0V18.75H25V21.875Z" fill="white" fill-opacity="0.79"/>
                    </svg>
                </button>
            </ul>
        </nav>
    </div>
</template>

<script>
//var showMenu = false

export default {
    data(){
        return{
            showMenu: false
        }
    },
    methods:{
        menuOn: function(){
            this.showMenu = !this.showMenu;
        }
    }
}

</script>

<style scoped>
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
