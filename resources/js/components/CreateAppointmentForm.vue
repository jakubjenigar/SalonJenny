<template>
    <div>
        <v-form @submit.prevent="onSubmit">
            <span class="help is-danger" v-text="errors"></span>
            <v-container>
                <v-row class="">
                    <v-col cols="12" md="12">
                        <v-text-field
                            v-model="first_name"
                            label="Meno"
                            required
                            @keydown="errors = ''"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="12">
                        <v-text-field
                            v-model="last_name"

                            label="Priezvisko"
                            required
                            @keydown="errors = ''"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field
                            v-model="phone_number"
                            label="Telefonne cislo"
                            :counter="10"
                            required
                            @keydown="errors = ''"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-select
                            v-model="service"
                            :items="services"
                            :item-text="service => service.service_name + ' - '+ service.dog_size"
                            :error-messages="errors"
                            label="Sluzba"
                            data-vv-name="select"
                            required>
                        </v-select>
                    </v-col>
                    <v-col class="d-flex justify-end" cols="12" md="4">
                        <v-menu
                            v-model="menu2"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"

                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="date_time"
                                    label="Den rezervacie"
                                    prepend-icon="mdi-calendar"
                                    locale="sk-SK"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                            </template>

                            <v-date-picker
                                v-model="date_time"
                                @input="menu2 = false"
                            ></v-date-picker>
                        </v-menu>

                    </v-col>
                    <v-col class="d-flex justify-end pb-6">
                    <v-btn type="submit" color="amber darken-2" large
                           rounded class="button is-primary" @click="snackbar = true" v-bind:class="{ 'is-loading' : isLoading }"
                    >Vytvorit rezervaciu</v-btn>
                        <v-snackbar
                            v-model="snackbar"
                        >
                            {{ text }}

                            <template v-slot:action="{ attrs }">
                                <v-btn
                                    color="pink"
                                    text
                                    v-bind="attrs"
                                    @click="snackbar = false"
                                >
                                    Zavriet
                                </v-btn>
                            </template>
                        </v-snackbar>
                    </v-col>
                </v-row>
                <v-row class="flex-column">


                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
import axios from 'axios'
import { API_BASE_URL } from '../config'

export default {
    data() {
        return {
            first_name: '',
            last_name: '',
            phone_number: '',
            date_time: new Date().toISOString().substr(0, 10),
            service_id: '',
            service:'',
            services: [],
            default_select: {
                service_name: "Vyberte sluzbu"
            },
            errors: '',
            isLoading: false,
            menu: false,
            menu2: false,
            snackbar: false,
            text: "Vasa rezervacia bola uspesne vytvorena"

        }
    },
    async created() {
        try {
            const response = await axios.get(API_BASE_URL + '/services')
            this.services = response.data.data
            this.isLoading = false
        } catch (e){

        }
    },
    methods: {
        findServiceId(){
            let values = this.service.split(" - ")
            console.log(values)
            const el = this.services.find(e => e.service_name == values[0] && e.dog_size == values[1])
            if (el){
                this.service_id = el.id
            }
        },

        onSubmit() {
            this.isLoading = true
            this.postService()
        },
        async postService() {
            this.findServiceId()
             axios.post(API_BASE_URL + '/requests', this.$data)
                    .then(response => {
                        this.first_name = ''
                        this.last_name = ''
                        this.phone_number = ''
                        this.date_time = ''
                        this.service_id = ''
                        this.isLoading = false
                        this.$emit('completed', response.data.data)
                    })
                    .catch(error => {
                        this.errors = error.response.data.errors
                        this.isLoading = false
                    })

        }



    }
}
</script>

<style scoped>

</style>
