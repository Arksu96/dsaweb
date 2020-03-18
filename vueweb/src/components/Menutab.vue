<template>
    <div>
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
            }
        }
    },
    methods:{
        tabChoose: function(page){
            this.$router.push(`/${page}`);
        }
    }
}
</script>

<style scoped>

div{
    position: absolute;
    z-index: -1;
    top: 50px;
    width: 100%;
}
ul{
    /* zrobic gridem*/
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap:wrap;

}
.menu-tab{
    width: 32.5%;
    min-width: 250px;
    height: 50%;
    background-color: #3D3D3D;
    border: 5px solid transparent;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 5px;
}
.menu-tab:hover{
    background-color: rgb(85, 85, 85);    
}
.menu-tab-icon{
    display: block;
    margin: auto;
    padding: 10% 0%;
}



</style>
