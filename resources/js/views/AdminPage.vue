<template>
    <div>
        <pricelistadmin></pricelistadmin>
        <v-divider></v-divider>
        <v-divider></v-divider>
        <requests-admin></requests-admin>
        <v-divider></v-divider>
        <appointment-list-admin></appointment-list-admin>
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
