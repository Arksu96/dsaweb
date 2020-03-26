<template>
    <div>
    <v-app
        background="transparent"
        id="time-slider"
    >
        <v-container class="user-card">
            <v-layout row justify-space-between>
                <v-flex xs12 md7>
                    <!-- karta konfiguracji -->
                    <v-card
                    class="mx-auto"
                    color="#5e5e5e"
                    outlined
                    >
                    <!-- opcje wyboru -->
                    <v-container>
                    <!-- tryb pracy -->
                        <v-row class="toggle-mode">
                            <p class="toggle-mode-title">Tryb pracy:</p>
                            <v-btn-toggle 
                                v-model="toggle_mode"
                                dark
                            >
                                <v-btn :value="'day'">
                                    <v-icon>mdi-brightness-5</v-icon>
                                </v-btn>
                                <v-btn :value="'night'">
                                    <v-icon>mdi-brightness-3</v-icon>
                                </v-btn>
                            </v-btn-toggle>
                        </v-row>
                    </v-container>
                    <v-container class="treeview-container">
                        <v-treeview 
                        class="treeview-title"
                        selectable
                        dark
                        :items="days"
                        >
                        </v-treeview>
                    </v-container>
                    <!-- slider -->
                        <v-range-slider 
                            v-model="range"
                            :max="max"
                            :min="min"
                            hide-details
                            color="#e7e9ea"
                        >
                        <!-- lewe pole tekstowe -->
                        <template v-slot:prepend>
                            <v-text-field
                            id="input-0"
                            :value="range[0] | formattedTime"
                            class="mt-0 pt-0"
                            hide-details
                            single-line
                            type="time"
                            @change="onChange"
                            ></v-text-field>
                        </template>
                        <!-- prawe pole tekstowe -->
                        <template v-slot:append>
                            <v-text-field
                            id="input-1"
                            :value="range[1] | formattedTime"
                            class="mt-0 pt-0"
                            hide-details
                            single-line
                            type="time"
                            @change="onChange"
                            ></v-text-field>
                        </template>
                        </v-range-slider>
                        <ul class="range-labels">
                            <li class="range-label-text">Następny dzień</li>
                        </ul>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn icon @click="addCard">
                            <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>

                </v-flex>
                <v-flex md5 v-for="(alarmInfo,index) in alarms" :key="index">
                    <!-- karta powiadomień -->
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
    </v-app>
    </div>
</template>

<script>

export default {
    name: 'alarmtab',
    data(){
        return{
            alarms: [],
            min: 0,
            max: 172799,
            range: [10000, 50000],
            timeRange: 0,
            toggle_mode: '',
            days: [
                {
                    id: 1,
                    name: 'Dni tygodnia',
                    children:[
                        {id: 2, name: 'Poniedziałek'},
                        {id: 3, name: 'Wtorek'},
                        {id: 4, name: 'Środa'},
                        {id: 5, name: 'Czwartek'},
                        {id: 6, name: 'Piątek'},
                        {id: 7, name: 'Sobota'},
                        {id: 8, name: 'Niedziela'}]
                }]
        }
    },
    methods: {
        //dodawanie kafelków
        addCard: function(){
            this.alarms.push({
            })
        },
        //zamiana str HHmm na liczbe odpowiadającą położeniu suwaka
        onChange(value){
            let rangeId = event.target.id.split('-');
            if(typeof value == "string"){
                //gdyby usunął godzinę
                if(value === ""){
                   this.timeRange = 0; 
                } else {
                let arr = value.split(':');
                let val = 0;
                if(this.range[rangeId[1]]>=86400){
                    val = ((parseInt(arr[0])*3600)+(parseInt(arr[1])*60))+86400;
                } else {
                    val = (parseInt(arr[0])*3600)+(parseInt(arr[1])*60);
                }
                this.timeRange = val;
                }
            }
            //pozwala zmienić wartość w kokretnym na podstawie id
            return this.$set(this.range,parseInt(rangeId[1]), this.timeRange)
        },
    },
    filters: {
        //formatowanie na HH:mm
        formattedTime: function (value) {
            if(value>=86400){
                value -= 86400;
            }
            var sec_num = parseInt(value, 10);
            var hours   = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
            //var seconds = sec_num - (hours * 3600) - (minutes * 60);

            if (hours   < 10) {hours   = '0'+hours;}
            if (minutes < 10) {minutes = '0'+minutes;}
            //if (seconds < 10) {seconds = "0"+seconds;}
            return hours+':'+minutes;
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
.theme--light.v-application{
    background: none;
}
/* żeby slider był wysokości suwaka */
>>>.v-slider--horizontal .v-slider__track-container{
    height: 12px;
}
/* tło suwaka */
>>>.v-application .primary.lighten-3{
    border-radius: 12px;
    background: linear-gradient(to right, #002b58, #ffd400, #002b58, #ffd400, #002b58);
}
/* pole tekstowe*/
>>>.theme--light.v-input input, .theme--light.v-input textarea{
    color: #e7e9ea;
}
>>>.v-text-field > .v-input__control > .v-input__slot:before{
    border-style: none;
}
/* 'X' button for resetting/clearing time */
>>>.v-text-field input::-webkit-clear-button {
    display: none;
}
>>>.v-application--is-ltr .v-input__prepend-outer{
    margin-left: 9px;
}
>>> .v-text-field input::-webkit-inner-spin-button {
  transform: translate(0px, -4px);
}
/* label */
.range-labels {
  list-style: none;
  text-align: center;
  transform: translate(5px, -10px);
}
.range-label-text{
    font-size: 15px;
    color: #e7e9ea;
}
.toggle-mode{
    padding: 10px 0px;
}
.toggle-mode-title{
    font-size: 18px;
    color: #e7e9ea;
    padding-right: 20px;
    padding-left: 10px;
    margin: 0;
    transform: translate(0px, 10px);
}
>>>.v-treeview-node__label {
    font-size: 18px;
    color: #e7e9ea;
}
.treeview-container{
    padding-top: 0;
}


</style>