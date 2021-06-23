<template>
    <div>
        <div v-if="isLoading">Loading prices...</div>
        <div v-else>
            <v-simple-table class="table">
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
                <template v-for="request in requests">
                    <tr v-bind:key="requests.id">
                        <td>{{request.first_name}}</td>
                        <td>{{request.last_name}}</td>
                        <td>{{request.phone_number}}</td>
                        <td>{{request.date_time}}</td>
                        <td>{{request.service_id}}</td>
                        <td>
                            <button class="button is-primary" v-bind:class="{ 'is-loading' : isDeleting(request.id) }" @click="deleteRequest(request.id)">Delete Service</button>
                        </td>
                        <td>
                            <button class="button is-primary" v-bind:class="{ 'is-loading' : isLoading }" @click="postRequest(request),deleteRequest(request.id)">accept Service</button>
                        </td>
                    </tr>
                </template>
                </tbody>
            </v-simple-table>
            <v-btn @click="refreshList">Refresh list</v-btn>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {API_BASE_URL} from '../config'

export default {
    data() {
        return {
            isLoading: true,
            requests: {},
            appointments: {},
        }
    },
    async created() {
        try {
            const response = await axios.get(API_BASE_URL + '/requests')
            this.requests = response.data.data
            this.isLoading = false
        } catch (e){

        }
    },

    methods: {

        async refreshList(){
            try {
                const response = await axios.get(API_BASE_URL + '/requests')
                this.requests = response.data.data
                this.isLoading = false
            } catch (e){

            }
        },

        onSubmit() {
            this.isLoading = true
            this.postService()
        },

        async postRequest(request) {
            axios.post (API_BASE_URL + '/appointments', request)
                .then(response =>{
                    this.first_name = ''
                    this.last_name = ''
                    this.phone_number = ''
                    this.date_time = ''
                    this.service_id = ''
                    this.isLoading = false
                    this.$emit('completed', response.data.data)
                    console.log(this.appointments);
                    console.log(this.$store.state.appointments);
                })
                .catch(error =>{
                    this.errors = error.response.data.errors
                    this.isLoading = false
                })
        },

        isDeleting(id){
            let index = this.requests.findIndex(request => request.id === id)
            return this.requests[index].isDeleting
        },

        async deleteRequest(id) {
            let index = this.requests.findIndex(request=> request.id === id)
            Vue.set (this.requests[index], 'isDeleting', true)
            await axios.delete(API_BASE_URL + '/requests/' + id)
            this.requests.splice(index, 1)
        }
    }


}
</script>

<style scoped>

</style>
