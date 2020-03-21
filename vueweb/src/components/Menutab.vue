<template>
    <div class="fade-content">
        <ul>
            <!--petla tworzenia kafelkow razem z przypisanymi iconami-->
            <!--id zeby nie wystepowalo ostrzezenie o powtarzaniu identyfikatorow-->
            <li v-for="(items,id) in menuTabImg" :key="`${id}-${items.id}`" @click="tabChoose(id)" class="menu-tab">
                <img v-bind:src="items.icon" class="menu-tab-icon"/>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return{
            menuTabImg: {
                alarm: {
                    //require potrzebne bo sciezka relatywna do JS
                    icon: require('../assets/icons/wl_wyl_24px.svg') 
                },
                stats: {
                    icon: require('../assets/icons/stats_24px.svg')
                },
                settings: {
                    icon: require('../assets/icons/settings_24px.svg')
                }
            },
        }
    },
    methods:{
        tabChoose: function(page){
            this.$router.push(`/${page}`).catch(err => {console.log(err)});
            this.$store.commit('toggleShowMenu');
        }
    }
}
</script>

<style scoped>
div{
    position: fixed;
    z-index: 1;
    top: 50px;
    width: 100%;
}
.fade-content{
    height: 100%;
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */    
}
ul{
    /* zrobic gridem*/
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap:inherit;

}
.menu-tab{
    width: 32.5%;
    /* min-width: 250px; */
    height: auto;
    background-color: #3D3D3D;
    border: 5px solid transparent;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.menu-tab:hover{
    background-color: rgb(145, 145, 145);    
}
.menu-tab-icon{
    display: block;
    margin: auto;
    max-width: 50%;
    padding: 10% 0%;
}



</style>
