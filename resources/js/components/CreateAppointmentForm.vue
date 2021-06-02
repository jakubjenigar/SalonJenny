<template>

    <form @submit.prevent="onSubmit">
        <span class="help is-danger" v-text="errors"></span>

        <div class="field">
            <div class="control">
                <input class="input" type="text" placeholder="enter first name..." v-model="first_name" @keydown="errors = ''">
                <input class="input" type="text" placeholder="enter last name..." v-model="last_name" @keydown="errors = ''">
                <input class="input" type="text" placeholder="enter phone number..." v-model="phone_number" @keydown="errors = ''">
                <v-date-picker v-model="date_time"
                               color="green lighten-1"
                               header-color="primary" @keydown="errors = ''">
                </v-date-picker>
                <select v-model="service" @keydown="errors = ''">
                    <option disabled value="">Please select one</option>
                    <option v-for="service in services" v-bind:key="service.id">
                        {{service.service_name}}, {{service.dog_size}}
                    </option>
                </select>
            </div>
        </div>

        <button class="button is-primary" v-bind:class="{ 'is-loading' : isLoading }">Request appointment</button>
    </form>
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
            services: {},
            errors: '',
            isLoading: false,

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
            let values = this.service.split(", ")
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
