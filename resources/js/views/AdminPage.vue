<template>
    <div>
        <v-app style="min-height: 100% !important">
            <v-container fluid class="pt-12">
            <nav-bar></nav-bar>
                <v-row class="pt-16">
                    <v-col xs="12" class="d-flex justify-center align-center text-h4">Admin nástroje</v-col>
                </v-row>

                <v-row class="pt-12 justify-space-around">
                    <v-col xs="12" md="6" class="d-flex justify-center align-top">
                        <v-card>
                            <v-card-title>Nové rezervácie</v-card-title>
                        <requests-admin></requests-admin>
                        </v-card>
                    </v-col>
                    <v-col xs="12" md="6" class="d-flex justify-center align-top">
                        <v-card>
                            <v-card-title>Potvrdené rezervácie</v-card-title>
                        <appointment-list-admin></appointment-list-admin>
                        </v-card>
                    </v-col>
                </v-row>

            <v-row>
                <v-col xs="12">
                    <pricelistadmin></pricelistadmin>
                </v-col>
            </v-row>
                <v-footer app>
                    <!-- -->
                    <v-col
                        class="text-center"
                        cols="12"
                        padless
                    >
                        <strong>©</strong> {{ new Date().getFullYear() }} — <strong>Salon Jenny</strong>
                    </v-col>
                </v-footer>



            </v-container>
        </v-app>
    </div>
</template>

<script>
import RequestsAdmin from "../components/RequestsAdmin";
import AppointmentListAdmin from "../components/AppointmentListAdmin";
import ServiceForm from "../components/ServiceForm";


export default {
    name: "AdminPage",
    components: {
        ServiceForm,
        RequestsAdmin,
        AppointmentListAdmin,
    },
}
</script>

<style scoped>

</style>
