<template>
    <v-app class="change_font">

        <!-- Sizes your content based upon application components -->
        <v-main>
            <v-container fluid class="ma-0 pa-0">
            <nav-bar></nav-bar>
            <!-- Provides the application the proper gutter -->

                <!-- If using vue-router -->
                <hero></hero>
                <about></about>
                <top-btn></top-btn>
                <pricelist></pricelist>




                <services></services>
                <gallery></gallery>
            </v-container>
        </v-main>


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
    </v-app>

</template>

<script>
import NavBar from '../components/NavBar.vue';
import Hero from '../views/Hero.vue';

export default {
    name: 'app',
    components: {
        NavBar,
        Hero,
    }
}
</script>


