<template>
    <v-app id="inspire">

        <v-row>
            <v-col class="d-flex justify-center align-center" style="z-index: 2">
                <h1 id="hero_title">Salón Jenny</h1>
            </v-col>
        </v-row>

        <v-row wrap class="p-10 justify-xs-center justify-md-start">
            <v-col xs="12" sm="12" md="6" lg="6" style="z-index: 3">
                <h1 id="hero_text" class="text-lg-start text-md-center text-xs-center">Profesionálny kadernícky salón pre vašich milovaných štvornohých chlpáčov</h1>
            </v-col>

        </v-row>

        <v-row wrap no-gutters class="pb-10 justify-sm-center justify-md-start">
            <v-col xs="12" sm="6" md="3" class="d-flex justify-md-end justify-sm-center pr-6 align-center align-xs-start py-1 " style="z-index: 3">
                <v-btn rounded outlined x-large color="amber darken-4">Služby</v-btn>
            </v-col>
            <v-col xs="12" sm="12" md="3" class="d-flex justify-md-start justify-sm-center align-center align-xs-start py-1" style="z-index: 3">
                <v-btn rounded x-large color="amber darken-2">Vytvoriť objednávku</v-btn>
            </v-col>

        </v-row>

        <v-row no-gutters  class="hidden-sm-and-down" style="margin-top: -20rem">
            <v-col md="6">
                <v-spacer></v-spacer>
            </v-col>

                <v-col md="6" class="hidden-xs-and-down pa-0 mb--16"  >
                    <v-parallax max-height="540" max-width="540" height="900" class="text-end myParallax"
                        src="https://i.ibb.co/JrQQ0Nq/dogbg.png"
                                style="z-index: 1">
                    </v-parallax>
                </v-col>

        </v-row>

        <v-row id="sep_row">
            <v-col xs="12" class="mt--6">
                <div class="custom-shape-divider-top-1622136307">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </v-col>
        </v-row>






        <editor-fold desc="Region">
<!--        <v-row>-->
<!--            <v-col>-->

<!--                <h1 id="hero_text" class="p-16">Profesionálny kadernícky salón pre vašich milovaných štvornohých chlpáčov</h1>-->
<!--                <div class="p-16  d-flex justify-start align-center">-->
<!--                    <v-btn rounded outlined x-large color="amber darken-4" class="cta">Služby</v-btn>-->
<!--                <v-btn rounded x-large class="cta" color="amber darken-2"> <v-icon x-large>content_cut</v-icon>Vytvoriť objednávku</v-btn>-->

<!--                </div>-->
<!--            </v-col>-->
<!--&lt;!&ndash;            https://i.ibb.co/Y06Z3NH/dogbg.png&ndash;&gt;-->
<!--            <v-col class="">-->
<!--                <v-img-->
<!--                    style="z-index: 1"-->
<!--                    src="https://i.ibb.co/Y06Z3NH/dogbg.png">-->
<!--                </v-img>-->
<!--            </v-col>-->
<!--        </v-row>-->
    </editor-fold>

    </v-app>
</template>

<script>

</script>

<style>
#sep_row{
    background-color: #FFA000;
    /*margin-top: -5rem;*/
    z-index: 3;
    height: 20rem;
}

.custom-shape-divider-top-1622136307 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1622136307 svg {
    position: relative;
    display: block;
    width: calc(153% + 1.3px);
    height: 140px;
}

.custom-shape-divider-top-1622136307 .shape-fill {
    fill: #FFFFFF;
}

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
.cta{
    font-family: Handlee, cursive;
    font-size: 18pt;
}

</style>
