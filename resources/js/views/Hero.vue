<template>
    <v-app id="inspire">

        <v-row id="start">
            <v-col class="d-flex justify-center align-center" style="z-index: 2">
                <h1 id="hero_title">Salón Jenny</h1>
            </v-col>
        </v-row>


        <v-row wrap class="p-10  justify-xs-center justify-md-start">
            <v-col xs="12" sm="12"  md="6" lg="6" style="z-index: 3; margin-top: 10rem">
                <h1 id="hero_text" class="text-lg-start text-md-center text-center">Profesionálny kadernícky salón pre vašich milovaných štvornohých chlpáčov</h1>
            </v-col>

        </v-row>

        <v-row wrap no-gutters class="pb-10 justify-sm-center justify-md-start">
            <v-col xs="12" sm="6" md="3" class="d-flex justify-md-end justify-end justify-sm-center align-center align-xs-end py-1 " style="z-index: 3">
                <router-link to="#services"><v-btn rounded outlined x-large color="amber darken-4">Služby</v-btn></router-link>
            </v-col>
            <v-col xs="12" sm="12" md="3" class="d-flex justify-md-start justify-sm-center align-center align-xs-start py-1" style="z-index: 3">
                <v-btn rounded x-large color="amber darken-2">Vytvoriť objednávku</v-btn>
            </v-col>

        </v-row>

        <v-row no-gutters  class="hidden-sm-and-down " style="margin-top: -25rem">
            <v-col md="6">
                <v-spacer></v-spacer>
            </v-col>

                <v-col md="6" class="hidden-xs-and-down pa-0 mb--16 pt-2    "  >
                    <v-parallax max-height="540" max-width="540" height="700" class="text-end myParallax"
                        src="https://i.ibb.co/JrQQ0Nq/dogbg.png"
                                style="z-index: 1">
                    </v-parallax>
                </v-col>

        </v-row>

<!--        <v-row class="mt-n16">-->
<!--            <v-col xs="12" class="d-flex justify-center align-sm-top">-->
<!--                <h1 class="text-center text-xs-h1" style="font-family: Handlee, cursive; font-size: 22pt">Cenník</h1>-->
<!--            </v-col>-->
<!--        </v-row>-->
<!--        <v-row>-->
<!--            <v-col xs="12" class="d-flex justify-center align-sm-top">-->
<!--                <v-icon x-large>expand_more</v-icon>-->
<!--            </v-col>-->
<!--        </v-row>-->



<!--        <v-row>-->
<!--            <v-col xs="12" >-->
<!--                <div class="custom-shape-divider-bottom-1622148330">-->
<!--                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">-->
<!--                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>-->
<!--                    </svg>-->
<!--                </div>-->
<!--            </v-col>-->

<!--        </v-row>-->







    </v-app>
</template>

<script>

</script>

<style>


.myParallax{
    background-attachment:fixed;
    background-size: 100% auto;
}



#hero_text{
    font-size: 32pt;
    font-family: Handlee, cursive;
}
#hero_title{
    font-size: 48pt;
    font-family: Handlee, cursive;
}



</style>
