<template>
    <div>
        <ul>
            <!--petla tworzenia kafelkow razem z przypisanymi iconami-->
            <!--id zeby nie wystepowalo ostrzezenie o powtarzaniu identyfikatorow-->
            <li v-for="(items,id) in menuTabImg" :key="`${id}-${items.id}`" class="menu-tab">
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
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    display: inline-block;

}
.menu-tab{
    width: 33.3%;
    min-width: 250px;
    height: 50%;
    background-color: black;
    opacity: 0.5;
    border: 5px solid #8A898D;
    box-sizing: border-box;
    border-radius: 10px;
    float: left;
}
.menu-tab-icon{
    display: block;
    margin: auto;
    padding: 10% 0%;
}
</style>
