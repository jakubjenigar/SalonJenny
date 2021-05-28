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
                            <td>{{service.price}}</td>
                        </tr>
                    </template>
                </tbody>
            </table>
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
    }
}
</script>

<style scoped>

</style>
