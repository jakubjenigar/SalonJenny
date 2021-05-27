<template>
    <v-btn
        fab
        fixed
        bottom
        right
        class="mb-14"
        @click="top">
<v-icon>keyboard_arrow_up</v-icon>
    </v-btn>

</template>



<script>
export default{
    methods:{
        top(){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }
    }
}
</script>
<style>
.rtl{
    direction: rtl;
}
</style>
