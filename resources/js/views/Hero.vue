<template>
    <v-app id="inspire">

        <v-row id="start">
            <v-col xs="12" class="d-flex justify-center align-center pt-6" style="z-index: 2">
                <h1 class="text-md-h4 text-h5 "
                    style="font-family: Amatic SC, cursive !important;
                     font-weight: 1000;
                     font-size: 40pt !important;"
                >
                    Salón Jenny</h1>
            </v-col>
        </v-row>


        <v-row wrap class="p-10  justify-xs-center justify-md-start">
            <v-col xs="12" sm="12"  md="6" lg="6" style="z-index: 3; margin-top: 10rem">
                <h1 id="hero_text" class="text-lg-start text-md-center text-center text-md-h4 text-h5 changeFont"
                    style="font-family: Amatic SC, cursive !important;
                     font-weight: 800;
                     font-size: 40pt !important;
                     line-height: 4rem">
                    Profesionálny kadernícky salón pre vašich milovaných štvornohých chlpáčov</h1>
            </v-col>

        </v-row>

        <v-row wrap no-gutters class="pb-10 justify-sm-center justify-md-start">
            <v-col xs="12" sm="6" md="3" class="d-flex justify-md-end justify-start justify-sm-center align-center align-xs-end py-1 " style="z-index: 3">
                <router-link to="#pricelist"><v-btn rounded outlined x-large color="amber darken-4">Cenník</v-btn></router-link>
            </v-col>
            <v-col xs="12" sm="12" md="3" class="d-flex justify-md-start justify-sm-center align-center align-xs-start py-1" style="z-index: 3">
<!--                <v-btn rounded x-large color="amber darken-2" >Vytvoriť objednávku</v-btn>-->
                <v-dialog
                    v-model="dialog"
                    width="unset"
                    hide-overlay
                    transition="dialog-bottom-transition"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            color="amber darken-2"
                            x-large
                            rounded
                            v-bind="attrs"
                            v-on="on"
                        >
                            Vytvoriť objednávku
                        </v-btn>
                    </template>
                    <v-card>
                        <v-toolbar
                            dark
                            color="amber darken-2"
                        >
                            <v-btn
                                icon
                                dark
                                @click="dialog = false"
                            >
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                            <v-toolbar-title>Objednávka</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
<!--                                <v-btn-->
<!--                                    dark-->
<!--                                    text-->
<!--                                    @click="dialog = false"-->
<!--                                >-->
<!--                                    Uložiť-->
<!--                                </v-btn>-->
                            </v-toolbar-items>
                        </v-toolbar>
                        <create-appointment-form></create-appointment-form>
                    </v-card>
                </v-dialog>
            </v-col>

        </v-row>

        <v-row no-gutters  class="hidden-sm-and-down " style="margin-top: -25rem">
            <v-col md="6">
                <v-spacer></v-spacer>
            </v-col>

                <v-col md="6" class="hidden-xs-and-down pa-0 mb--16 pt-2    "  >
                    <v-parallax max-height="540" max-width="540" height="750" class="text-end myParallax"
                        src="https://i.ibb.co/JrQQ0Nq/dogbg.png"
                                style="z-index: 1">
                    </v-parallax>
                </v-col>

        </v-row>


    </v-app>
</template>

<script>
export default {
    data () {
        return {
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
        }
    },
}
</script>

<style>


.myParallax{
    background-attachment:fixed;
    background-size: 100% auto;
}

.changeFont{
    font-family: 'Amatic SC', cursive !important;
    font-weight: 1000;
}
.v-btn__content{
    font-size: 18pt !important;
}



</style>
