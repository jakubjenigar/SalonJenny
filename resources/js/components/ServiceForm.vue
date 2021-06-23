<template>


    <v-form @submit.prevent="onSubmit">
        <span class="help is-danger" v-text="errors"></span>

        <v-container>
            <v-row>
                 <v-col cols=12 xs="12"  class="pt-8 pb-0 justify-start"><h1 class="text-center hero_title" >Pridat novu sluzbu</h1></v-col>

                <v-col cols=4 xs="4">
                        <v-text-field  type="text" placeholder="enter service name..." v-model="service_name" @keydown="errors = ''">
                        </v-text-field>
                </v-col>
                <v-col cols=4  xs="4">


                    <v-text-field placeholder="enter dog size..." v-model="dog_size" @keydown="errors = ''">
                    </v-text-field>
                </v-col>
               <v-col cols=4  xs="4">
                        <v-text-field class="input" type="text" placeholder="enter price..." v-model="price" @keydown="errors = ''">
                        </v-text-field>
               </v-col>
            </v-row>
            <v-row>
                <v-col xs="12" class="d-flex justify-end">
                    <v-btn type="submit" color="amber darken-2" large
                           rounded class="button is-primary"  v-bind:class="{ 'is-loading' : isLoading }"
                    >Pridat sluzbu</v-btn>
                </v-col>
            </v-row>
        </v-container>


    </v-form>

<!--    <form @submit.prevent="onSubmit">-->
<!--        <span class="help is-danger" v-text="errors"></span>-->

<!--        <div class="field">-->
<!--            <div class="control">-->
<!--                <input class="input" type="text" placeholder="enter service name..." v-model="service_name" @keydown="errors = ''">-->
<!--                <input class="input" type="text" placeholder="enter dog size..." v-model="dog_size" @keydown="errors = ''">-->
<!--                <input class="input" type="text" placeholder="enter price..." v-model="price" @keydown="errors = ''">-->
<!--            </div>-->
<!--        </div>-->
<!--        <button class="button is-primary" v-bind:class="{ 'is-loading' : isLoading }">Pridat sluzbu</button>-->
<!--    </form>-->
</template>

<script>
    import axios from 'axios'
    import { API_BASE_URL } from '../config'

    export default {
        data() {
            return {
                service_name: '',
                dog_size: '',
                price: '',
                errors: '',
                isLoading: false,
            }
        },
        methods: {
            onSubmit() {
                this.isLoading = true
                this.postService()
            },
            async postService() {
                axios.post (API_BASE_URL + '/services', this.$data)
                    .then(response =>{
                        this.service_name = ''
                        this.dog_size = ''
                        this.price = ''
                        this.isLoading = false
                        this.$emit('completed', response.data.data)
                    })
                    .catch(error =>{
                        this.errors = error.response.data.errors
                        this.isLoading = false
                    })
            },

        }
    }
</script>

<style scoped>

</style>
