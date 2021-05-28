<template>
    <div>
        <div v-if="isLoading">Loading prices...</div>
        <div v-else>
            <table class="table">
                <thead>
                <tr>
                    <th>Sluzba</th>
                    <th>Velkost psa</th>
                    <th>Cena</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="service in services">
                    <tr v-bind:key="service.id">
                        <td>{{service.service_name}}</td>
                        <td>{{service.dog_size}}</td>
                        <td>{{service.price}} €</td>
                        <td>
                            <button class="button is-primary" v-bind:class="{ 'is-loading' : isDeleting(service.id) }" @click="deleteService(service.id)">Delete Service</button>
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
        </div>
        <serviceform @completed="addService"></serviceform>
    </div>
</template>

<script>
import axios from 'axios'
import {API_BASE_URL} from '../config'
import Vue from 'vue'
import ServiceForm from './ServiceForm.vue'

export default {
    components:{
      ServiceForm
    },
    data() {
        return {
            isLoading: true,
            services: {}
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

        addService(service) {
            this.services.push(service)
        },

        isDeleting(id){
            let index = this.services.findIndex(service => service.id === id)
            return this.services[index].isDeleting
        },

        async deleteService(id) {
            let index = this.services.findIndex(player=> player.id === id)
            Vue.set (this.services[index], 'isDeleting', true)
            await axios.delete(API_BASE_URL + '/services/' + id)
            this.services.splice(index, 1)
        }
    }


}
</script>

<style scoped>

</style>
