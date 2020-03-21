<template>
    <div>
        <v-btn width="40px" height="40px" icon @click="returnMain" class="rtn-btn">
            <v-icon>mdi-reply</v-icon>
        </v-btn>
    </div>
</template>

<script>

export default {
    name: 'returnbtn',
    data(){
        return{

        }
    },
    methods:{
        returnMain: function(){
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
*{
    z-index: 1;
    position: fixed;
    bottom: 0;
    right:0;
}
.rtn-btn{
    transform: translate(-5px, -5px);
}
.theme--light.v-btn.v-btn--icon {
    color: white;
    background-color: #D63131;

}
</style>