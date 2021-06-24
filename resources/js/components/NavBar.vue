<template>

        <v-app-bar
            app
            color="white"

            elevate-on-scroll >
            <v-icon class="material-icons-outlined">pets</v-icon>
            <v-toolbar-title style="
            font-family: Amatic SC, cursive;
            font-weight: 700;
            font-size: 18pt;
            margin-left: 10px;
            margin-top: 5px;">

                <router-link to="/#app" style="color: black;
            text-decoration: none;">Salón Jenny</router-link></v-toolbar-title>

            <v-spacer></v-spacer>
                <div class="hidden-sm-and-down">
                    <router-link to="/#about">  <v-btn text class="pl-2 pr-2 navBarButton">O mne</v-btn></router-link>

               <router-link to="/#pricelist"> <v-btn text class="pl-2 pr-2">Cenník</v-btn> </router-link>
                    <router-link to="/#services"> <v-btn text class="pl-2 pr-2">Služby</v-btn> </router-link>
               <router-link to="/#gallery"> <v-btn text class="pl-2 pr-2">Galéria</v-btn></router-link>
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
                        <v-list-item-title><router-link :to="item.path" style="color: black"><button>{{ item.title }}</button></router-link></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        items: [
            { title: 'O nás', path: '/#about' },
            { title: 'Cenník', path: '/#pricelist' },
            { title: 'Služby',  path: '/#services' },
            { title: 'Galéria', path: '/#gallery' },
        ],
    }),
}
</script>

<style>
.v-btn{
    font-family: Amatic SC, cursive;
    font-size: 72pt;
    font-weight: 700;
    margin: 0px 20px 0px 20px;
}
.v-list-item-title{
    font-family: Amatic SC, cursive;
    font-size: 72pt;
    font-weight: 700;
}

</style>
