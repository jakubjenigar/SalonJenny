<template>
    <form @submit.prevent="onSubmit">
        <span class="help is-danger" v-text="errors"></span>

        <div class="field">
            <div class="control">
                <input class="input" type="text" placeholder="enter service name..." v-model="service_name" @keydown="errors = ''">
                <input class="input" type="text" placeholder="enter dog size..." v-model="dog_size" @keydown="errors = ''">
                <input class="input" type="text" placeholder="enter price..." v-model="price" @keydown="errors = ''">
            </div>
        </div>
        <button class="button is-primary" v-bind:class="{ 'is-loading' : isLoading }">Pridat sluzbu</button>
    </form>
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
                isLoading: false
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
            }
        }
    }
</script>

<style scoped>

</style>
