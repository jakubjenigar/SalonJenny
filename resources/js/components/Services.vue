<template>

<div  class="pt-3" id="services">
            <v-row >
                <v-col xs="12">
                    <div class="custom-shape-divider-top-1622136307">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </v-col>

            </v-row>
    <v-row><v-col xs="12"><v-spacer></v-spacer></v-col></v-row>

            <v-row>
                <v-col xs="12" class="pt-10 pb-0 mb-n1"><h1 class="text-center hero_title" >Ako sa o Vášho psíka starám</h1></v-col>
            </v-row>




            <v-row wrap class="text-sm-center bg" style="z-index: 3; font-size: 14pt; font-family: Handlee, cursive">

                <v-col xs="12" md="6" class="text-sm-end  pa-6 pt-10">
                    <v-icon>pets</v-icon> príjem psíka, jeho prehliadka a dohoda s majiteľom na požadovanej úprave
                </v-col>
                <v-col xs="12" md="6" class="text-start  pa-6 pt-10">
                   <v-icon>pets</v-icon> ostrihanie srsti  na celom tele, úprava v oblasti labiek, uší, chvosta a zadku
                </v-col>
                <v-col xs="12" md="6" class="text-end  pa-6 pt-10">
                    <v-icon>pets</v-icon> kúpanie, ošetrenie srsti kondicionérom, usušenie
                </v-col>
                <v-col xs="12" md="6" class="text-start  pa-6 pt-10">
                    <v-icon>pets</v-icon> vyčesávanie, vytrhávanie odumretej srsti, trimovanie
                </v-col>
                <v-col xs="12" md="12" class="text-center  pa-6 pb-10">
                    <v-icon>pets</v-icon> vyčistenie očí, uší
                </v-col>
            </v-row>
            <v-row>

                <v-col xs="12" class="pt-10 mb-6">
                    <div class="custom-shape-divider-bottom-1622150385 mb-n2">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </v-col>

            </v-row>
</div>

</template>
<script>

</script>

<style>


.bg{
    background-color: #FFA000;
}
#services:before {
    content: "";
    display: block;
    height: 200px;
    margin: -200px 0 0;
}


.custom-shape-divider-top-1622136307 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    background-color: #FFA000;
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

.custom-shape-divider-bottom-1622150385 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    background-color: #FFA000;
}

.custom-shape-divider-bottom-1622150385 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 74px;
}

.custom-shape-divider-bottom-1622150385 .shape-fill {
    fill: #FFFFFF;
}
</style>
