<template>
    <div>
        <router-link to="#app">
        <v-btn
            fab
            fixed
            bottom
            right
            class="mb-14"
            @click="top">
            <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
        </router-link>
    </div>

</template>



<script>
export default{
    methods:{
        top(params){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
            // history.pushState(
            //     {},
            //     null,
            //     this.$route.path  + encodeURIComponent(params)
            // )
        },
        clearUrl(params){

        }
    }
}
</script>
<style>
.rtl{
    direction: rtl;
}
</style>
