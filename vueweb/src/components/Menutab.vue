<template>
    <div>
        <ul>
            <li class="menu-tab"></li>
            <li class="menu-tab"></li>
            <li class="menu-tab"></li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return{
            menuTabImg: [{
                alarm: {
                    image: '<img src="../assets/icons/wl_wyl_24px.svg" />'
                },
                stats: {
                    image: '<img src="../assets/icons/stats_24px.svg" />'
                },
                settings: {
                    image: '<img src="../assets/icons/settings_24px.svg" />'
                }
            }]
        }
    },
    methods:{

    }
}
</script>

<style scoped>

div{
    position: absolute;
    top: 50px;
}
ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: inline-block;
}
.menu-tab{
    width: 420px;
    height: 359px;
    background-color: black;
    opacity: 0.5;
    border: 5px solid #8A898D;
    box-sizing: border-box;
    border-radius: 10px;
    float: left;
}
</style>
