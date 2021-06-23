<template>
    <v-app>

        <div v-if="isLoading">Loading prices...</div>
        <div v-else>
         <div>

<!--             <v-row>-->
<!--                    <v-col  class="pt-8 pb-0"><h1 class="text-center hero_title" >Zoznam sluzieb</h1></v-col>-->


<!--             </v-row>-->
             <v-card>
                 <v-card-title class="text-center hero_title" >Zoznam sluzieb</v-card-title>
            <v-row>
            <v-col xs="12"   class="d-flex justify-center align-center">
                <v-simple-table style="width: 100%" class="pa-6">
                    <thead>
                    <tr class="text-center">
                        <th class="text-center" style="width: 40%">Sluzba</th>
                        <th class="text-center" style="width: 30%">Velkost psa</th>
                        <th class="text-center" style="width: 30%">Cena</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-for="service in services">
                        <tr v-bind:key="service.id">
                            <td class="text-center">{{service.service_name}}</td>
                            <td class="text-center">{{service.dog_size}}</td>
                            <td class="text-center">{{service.price}}</td>
                            <td>
                                <button class="button is-primary" v-bind:class="{ 'is-loading' : isDeleting(service.id) }" @click="deleteService(service.id)"><v-icon class="material-icons-outlined">
                                    delete
                                </v-icon></button>
                            </td>
                        </tr>
                    </template>
                    </tbody>
                </v-simple-table>
            </v-col>

        </v-row>
             <v-row>

                     <v-col xs="12"  class="d-flex justify-center">
                         <service-form @completed="addService"></service-form>
                     </v-col>
             </v-row>
             </v-card>
            </div>
        </div>

<!--        <div v-if="isLoading">Loading prices...</div>-->
<!--        <div v-else>-->
<!--            <table class="table">-->
<!--                <thead>-->
<!--                <tr>-->
<!--                    <th>Sluzba</th>-->
<!--                    <th>Velkost psa</th>-->
<!--                    <th>Cena</th>-->
<!--                </tr>-->
<!--                </thead>-->
<!--                <tbody>-->
<!--                <template v-for="service in services">-->
<!--                    <tr v-bind:key="service.id">-->
<!--                        <td>{{service.service_name}}</td>-->
<!--                        <td>{{service.dog_size}}</td>-->
<!--                        <td>{{service.price}} €</td>-->
<!--                        <td>-->
<!--                            <button class="button is-primary" v-bind:class="{ 'is-loading' : isDeleting(service.id) }" @click="deleteService(service.id)">Delete Service</button>-->
<!--                        </td>-->
<!--                    </tr>-->
<!--                </template>-->
<!--                </tbody>-->
<!--            </table>-->
<!--        </div>-->

    </v-app>
</template>

<script>
import axios from 'axios'
import {API_BASE_URL} from '../config'
import Vue from 'vue'
import ServiceForm from './ServiceForm.vue'
import NavBar from "./NavBar";

export default {
    components:{
      ServiceForm,
        NavBar,
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
