<template>
    <div>
        <v-container class="user-card">
            <v-layout row justify-space-between>
                <v-flex xs12 md7>
                    <v-card
                    class="mx-auto"
                    color="#5e5e5e"
                    
                    outlined
                    >
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn icon @click="addCard">
                            <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex md5 v-for="(alarmInfo,index) in alarms" :key="index">
                    <v-card
                    class="mx-auto"
                    color="#5e5e5e"
                    outlined
                    wrap
                    >
                        <v-list-item-content>
                            <div class="overline mb-4">OVERLINE</div>
                            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, 
                                suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam 
                                pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque 
                                semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, 
                                dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, 
                                pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus 
                            </div>
                        </v-list-item-content>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
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
    margin: 10px 5px;
}
.theme--light.v-btn.v-btn--icon {
    color: white;
    opacity: 0.8;
}

</style>