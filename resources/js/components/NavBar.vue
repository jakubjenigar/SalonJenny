<template>

        <v-app-bar
            app
            color="white"
            elevate-on-scroll>
            <v-icon class="material-icons-outlined">pets</v-icon>
            <v-toolbar-title style="font-family: Handlee, cursive; font-size: 16pt; margin-left: 10px; margin-top: 5px;">

                Salón Jenny</v-toolbar-title>

            <v-spacer></v-spacer>

            <ul class="menu_items">
                <v-btn text class="pl-5 pr-5">Služby</v-btn>
                <v-btn text class="pl-5 pr-5">Cenník</v-btn>
                <v-btn text class="pl-5 pr-5">O nás</v-btn>
                <v-btn text class="pl-5 pr-5">Galéria</v-btn>
                <v-btn text class="pl-5 pr-5">Objednávky</v-btn>
            </ul>
        </v-app-bar>
</template>

<script>

</script>

<style>
.menu_items{
    font-family: Handlee, cursive; font-size: 16pt; display: flex
}
.menu_items v-btn{
    margin: 0px 20px 0px 20px;
}
</style>
