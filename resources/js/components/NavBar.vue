<template>

        <v-app-bar
            app
            color="white"
            elevate-on-scroll >
            <v-icon class="material-icons-outlined">pets</v-icon>
            <v-toolbar-title style="font-family: Handlee, cursive; font-size: 16pt; margin-left: 10px; margin-top: 5px;">

                Salón Jenny</v-toolbar-title>

            <v-spacer></v-spacer>
                <div class="hidden-sm-and-down">
                <v-btn text class="pl-2 pr-2">Služby</v-btn>
                <v-btn text class="pl-2 pr-2">Cenník</v-btn>
                <v-btn text class="pl-2 pr-2">O nás</v-btn>
                <v-btn text class="pl-2 pr-2">Galéria</v-btn>
                <v-btn text class="pl-2 pr-2">Objednávky</v-btn>
                </div>

            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                        <v-app-bar-nav-icon v-on="on" class="hidden-md-and-up"></v-app-bar-nav-icon>
                </template>
                <v-list>
                    <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        items: [
            { title: 'Služby' },
            { title: 'Cenník' },
            { title: 'O nás' },
            { title: 'Galéria' },
            { title: 'Objednávky' },
        ],
    }),
}
</script>

<style>
.v-btn{
    font-family: Handlee, cursive; font-size: 16pt;
    margin: 0px 20px 0px 20px;
}

</style>
