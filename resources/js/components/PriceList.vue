<template>
    <div id="pricelist">
        <v-row style="z-index: 1">

            <v-col xs="12" md="12" class="d-flex justify-center align-center" style="z-index: 2">
                <h1 class="text-md-h4 text-h5 changeFont"
                    style="font-family: Amatic SC, cursive !important;
                     font-weight: 800;
                     font-size: 40pt !important;">
                    Cenník</h1>
            </v-col>
        </v-row>
        <div v-if="isLoading">Loading prices...</div>
        <v-row class="justify-center" v-else>
            <v-col xs="12" md="6"><v-img src="https://i.ibb.co/qN2mHcw/cennik.png" style="z-index: 3"></v-img></v-col>
            <v-col xs="12" md="6" class="d-flex justify-center align-center">
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
                                    <td class="text-center">{{service.price}} €</td>
                                </tr>
                            </template>
                            </tbody>
                        </v-simple-table>
            </v-col>


        </v-row>




    </div>
</template>

<script>
import axios from 'axios'
import {API_BASE_URL} from '../config'

export default {
    data() {
        return {
            isLoading: true,
            services: {},
            filter_names: [],
            sizes: [],

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

}
</script>

<style scoped>
#pricelist:before {
    content: "";
    display: block;
    height: 200px;
    margin: -200px 0 0;
}

td{

    font-weight: 600;
    font-family: 'Amatic SC';
    font-size: 16pt !important;
}
th{

    font-weight: 1000 !important;
    font-family: 'Amatic SC';
    font-size: 22pt !important;
}

</style>
