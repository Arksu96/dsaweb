<template>
    <div class="user-card">
        <v-card
            class="mx-auto"
            max-width="60%"
            color="#3D3D3D"
            outlined
        >
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon @click="addCard">
                <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'alarmtab',
    data(){
        return{
            alarms: []
        }
    },
    methods: {
        //dodawanie kafelków
        addCard: function(){
            this.alarms.push({
            })
        }
    }
}
</script>

<style scoped>
.user-card{
    padding-top: 5px;
}
.mx-auto{
    margin: 10px 10px;
}
.theme--light.v-btn.v-btn--icon {
    color: white;
    opacity: 0.8;
}

</style>