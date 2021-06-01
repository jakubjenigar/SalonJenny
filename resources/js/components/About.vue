<template>
<div  class="pt-3 anchor" id="about">
<v-row >
    <v-col xs="12">
        <div class="custom-shape-divider-top-1622136307">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
    </v-col>

</v-row>

<v-row>
    <v-col xs="12" class="pt-8 pb-0"><h1 class="text-center hero_title" >O mne</h1></v-col>
</v-row>

<div class="bg pb-16 pt-10">
<v-row wrap class="text-sm-center justify-center pt-10 pl-60 pr-60 pb-0 " style="z-index: 3; font-size: 16pt; font-family: Handlee, cursive">

    <v-col xs="12" md="12" class="d-flex justify-center align-center">
        <p class="text-center">
            Volám sa Jarka a pre svoje povolanie som sa rozhodla vychádzajúc zo svojho vzťahu k zvieratkám. Niekoľko rokov som mala možnosť pracovať  ako strihačka psov v salóne, ktorý sa nachádza na veterinárnej klinike a práve tam nadobudnuté skúsenosti spolu s mojou láskou k zvieratám mi vnukli myšlienku zdokonaliť sa ešte na individuálnom kurze a otvoriť si vlastný salón Jenny.
        </p>
    </v-col>
<!--    <v-col xs="12"><v-spacer></v-spacer></v-col>-->
    <v-col xs="12" md="12" class="d-flex justify-center align-center">
        <p class="text-center">To všetko Vám dáva  záruku, že svojich štvornohých zákazníkov ošetrím s profesionálnym prístupom, bez použitia akýchkoľvek utlmovacích prostriedkov, v priateľskom a čistom prostredí. Svoj salón som pomenovala po mojom milovanom pudlíkovi, ktorý už žiaľ nie je so mnou. Prežila však krásnych 13 rokov. Určite sa postarám o Vášho psíka, aby bol šťastný.</p>
    </v-col>

</v-row>
    <v-row>
        <v-col xs="12" class="pl-16 pr-16"><v-divider></v-divider></v-col>
    </v-row>

    <v-row wrap class="text-sm-center" style="z-index: 3; font-size: 14pt; font-family: Handlee, cursive">

        <v-col xs="12" md="6" class="text-sm-end  pa-6 pt-10">
            <v-icon>pets</v-icon> upravím , okúpem, ostrihám, učešem, prípadne vytrimujem
        </v-col>
        <v-col xs="12" md="6" class="text-start  pa-6 pt-10">
            <v-icon>pets</v-icon> používam výhradne psiu kozmetiku rôznych firiem vhodnú pre jednotlivé plemená
        </v-col>
        <v-col xs="12" md="6" class="text-end  pa-6 pt-10">
            <v-icon>pets</v-icon> strihacie nástroje pravidelne dezinfikujem
        </v-col>
        <v-col xs="12" md="6" class="text-start  pa-6 pt-10">
            <v-icon>pets</v-icon> na každého psa používam čistý uterák, ktorý je praný pri 90-tich stupňoch
        </v-col>
        <v-col xs="12" md="6" class="text-end  pa-6 pb-10">
            <v-icon>pets</v-icon> termím strihania a iných služieb je potrebné si dohodnúť vopred telefonicky
        </v-col>
        <v-col xs="12" md="6" class="text-start  pa-6 pb-10">
            <v-icon>pets</v-icon> v prípade akýchkoľvek otázok ma môžete kontaktovať, rada odpoviem
        </v-col>
    </v-row>
</div>
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
    /*background-color: #FFA000;*/
    /*background-image: linear-gradient(0deg, #ff5858 0%, #f09819 100%);*/
    background: rgb(255,177,0);
    background: linear-gradient(180deg, rgba(255,177,0,1) 0%, rgba(255,109,0,1) 100%);
    background-attachment: fixed;

}
#about:before {
    content: "";
    display: block;
    height: 300px;
    margin: -300px 0 0;
}


.custom-shape-divider-top-1622136307 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    /*background-color: #FFA000;*/
    /*background-image: linear-gradient(0deg, #ff5858 0%, #f09819 100%);*/
    background: rgb(255,177,0);
    background: linear-gradient(180deg, rgba(255,177,0,1) 0%, rgba(255,109,0,1) 100%);
    background-attachment: fixed;

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
    /*background-image: linear-gradient(0deg, #ff5858 0%, #f09819 100%);*/
    background: rgb(255,177,0);
    background: linear-gradient(180deg, rgba(255,177,0,1) 0%, rgba(255,109,0,1) 100%);
    background-attachment: fixed;
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
