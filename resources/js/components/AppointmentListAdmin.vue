<template>
    <div>
        <div v-if="isLoading">Loading prices...</div>
        <div v-else>
            <table class="table">
                <thead>
                <tr>
                    <th>Meno</th>
                    <th>Priezisko</th>
                    <th>Telefon</th>
                    <th>Datum</th>
                    <th>Detaily</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="appointment in appointments">
                    <tr v-bind:key="appointment.id">
                        <td>{{appointment.first_name}}</td>
                        <td>{{appointment.last_name}}</td>
                        <td>{{appointment.phone_number}}</td>
                        <td>{{appointment.date_time}}</td>
                        <td>{{appointment.service_id}}</td>
                        <td>
                            <button class="button is-primary" v-bind:class="{ 'is-loading' : isDeleting(appointment.id) }" @click="deleteRequest(appointment.id)">Vymazat Objednavku</button>
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
            <v-btn @click="refreshList">Refresh list</v-btn>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {API_BASE_URL} from '../config'
import Vue from 'vue'

export default {
    data() {
        return {
            isLoading: true,
            appointments: {},
        }
    },
    async created() {
        try {
            const response = await axios.get(API_BASE_URL + '/appointments')
            this.appointments = response.data.data
            this.isLoading = false
        } catch (e){

        }
    },

    methods: {
        isDeleting(id){
            let index = this.appointments.findIndex(request => request.id === id)
            return this.appointments[index].isDeleting
        },

        async refreshList(){
            try {
                const response = await axios.get(API_BASE_URL + '/appointments')
                this.appointments = response.data.data
                this.isLoading = false
            } catch (e){

            }
        },

        async deleteRequest(id) {
            let index = this.appointments.findIndex(request=> request.id === id)
            Vue.set (this.appointments[index], 'isDeleting', true)
            await axios.delete(API_BASE_URL + '/appointments/' + id)
            this.appointments.splice(index, 1)
        }
    }


}
</script>

<style scoped>

</style>
