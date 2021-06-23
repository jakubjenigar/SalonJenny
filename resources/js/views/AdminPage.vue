<template>
    <div>
        <v-app>
            <v-container fluid class="pt-12">
            <nav-bar></nav-bar>


            <v-row>
                <v-col xs="12" md="12">
                    <pricelistadmin></pricelistadmin>
                </v-col>
            </v-row>

        </v-container>

        <v-divider></v-divider>
        <v-divider></v-divider>
        <requests-admin></requests-admin>
        <v-divider></v-divider>
        <appointment-list-admin></appointment-list-admin>
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
