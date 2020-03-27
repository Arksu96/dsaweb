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
                    <!-- dni tygodnia -->
                    <v-container class="treeview-container">
                        <v-select
                        v-model="daysSelected"
                        :items="days"
                        chips
                        label="Dni tygodnia"
                        multiple
                        dark
                        solo
                        >
                        </v-select>
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
                <!-- Alarm Info -->
                </v-flex>
                <v-flex md4 v-for="(alarmInfo,index) in alarms" :key="index">
                    <!-- karta powiadomień -->
                    <v-card
                    class="mx-auto"
                    color="#5e5e5e"
                    outlined
                    wrap
                    >
                    <v-row>
                        <v-card-title primary-title class="alarm-info-title">
                            Alarm1
                        </v-card-title>
                    <v-spacer></v-spacer>
                        <v-icon dark class="alarm-info-icon">mdi-brightness-3</v-icon>
                    </v-row>
                    <div class="alarm-info-break">
                    </div>
                        <v-row class="alarm-info-row">
                        <v-card-text class="alarm-info-text">
                            Dni tygodnia:
                        </v-card-text>
                        <div class="weekDays-selector">
                            <input type="checkbox" id="weekday-mon" class="weekday" disabled/>
                            <label for="weekday-mon">Pn</label>
                            <input type="checkbox" id="weekday-tue" class="weekday" disabled/>
                            <label for="weekday-tue">Wt</label>
                            <input type="checkbox" id="weekday-wed" class="weekday" disabled/>
                            <label for="weekday-wed">Śr</label>
                            <input type="checkbox" id="weekday-thu" class="weekday" disabled/>
                            <label for="weekday-thu">Cz</label>
                            <input type="checkbox" id="weekday-fri" class="weekday" disabled/>
                            <label for="weekday-fri">Pt</label>
                            <input type="checkbox" id="weekday-sat" class="weekday" disabled/>
                            <label for="weekday-sat">Sb</label>
                            <input type="checkbox" id="weekday-sun" class="weekday" disabled/>
                            <label for="weekday-sun">Nd</label>
                        </div>
                        </v-row>
                        <v-card-text class="alarm-info-text">
                            Początek: {{range[0] | formattedTime}}
                        </v-card-text>
                         <v-card-text class="alarm-info-text">
                            Koniec: {{range[1] | formattedTime}}
                        </v-card-text>
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
            alarms: [''],
            min: 0,
            max: 172799,
            range: [10000, 50000],
            timeRange: 0,
            toggle_mode: '',
            days: ['Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota','Niedziela'],
            daysSelected: [],
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
    border-width: 5px !important;
    border-color: #8A898D !important;
    border-radius: 10px !important;
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
/*Alarm Info*/
.alarm-info-title{
    padding-left: 30px;
    color: #e7e9ea;
}
.alarm-info-icon{
    padding-right: 30px;
}
.alarm-info-break{
    display: block;
    width: 100%;
    height: 5px;
    background: #C4C4C4;
    position: absolute;
}
.alarm-info-text{
    color: #e7e9ea !important;
    font-size: 15px;
    width: auto;
}
.alarm-info-row{
    padding-left: 10px;
}
.weekDays-selector{
    padding: 10px;
}
.weekDays-selector input {
  display: none!important;
}

.weekDays-selector input[type=checkbox] + label {
  display: inline-block;
  border-radius: 6px;
  background: #dddddd;
  height: 40px;
  width: 30px;
  margin-right: 5px;
  line-height: 40px;
  text-align: center;
}

.weekDays-selector input[type=checkbox]:checked + label {
  background: #D63131;
  color: #ffffff;
}

</style>