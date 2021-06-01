<template>
    <div>

        <v-row class="pa-16">
        <v-col
            v-for="(item, x) in items"
            :key="x"
            class="d-flex child-flex pa-2"
            cols="3"
        >
            <v-img

                aspect-ratio="1"
                class="grey lighten-2"
                :src="item.src"
            >
                <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                        <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                        ></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-col>


        </v-row>


        <v-dialog
            v-model="dialog"
            width="500"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="red lighten-2"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                    Click Me
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="headline grey lighten-2">
                    Privacy Policy
                </v-card-title>

                <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                    >
                        I accept
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            items: [
                {
                    src: 'https://i.ibb.co/g9NSs51/OLYMPUS-DIGITAL-CAMERA.jpg',
                },
                {
                    src: 'https://i.ibb.co/PzjXBc3/OLYMPUS-DIGITAL-CAMERA.jpg',
                },
                {
                    src: 'https://i.ibb.co/tYhRf7Y/OLYMPUS-DIGITAL-CAMERA.jpg',
                },
                {
                    src: 'https://i.ibb.co/hcrR76j/OLYMPUS-DIGITAL-CAMERA.jpg',
                },
                {
                    src: 'https://i.ibb.co/4ZMsDVV/20151027-131744.jpg',
                },
                {
                    src: 'https://i.ibb.co/vzrCtfd/20150917-124211.jpg',
                },
                {
                    src: 'https://i.ibb.co/QK1HP9d/79206304-661382747725339-4568890771016515584-n.jpg',
                },
                {
                    src: 'https://i.ibb.co/jhdzRzJ/dav.jpg',
                },
                {
                    src: 'https://i.ibb.co/yF8Z7fv/dav.jpg',
                },
                {
                    src: 'https://i.ibb.co/mCVgdSt/dav.jpg',
                },
            ],
        }
    },
}
</script>

<style>
#gallery:before {
    content: "";
    display: block;
    height: 200px;
    margin: -200px 0 0;
}

</style>
