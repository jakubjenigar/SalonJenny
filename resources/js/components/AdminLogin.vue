<template>
    <div>
        <div class="row">
            <form action="#" @submit.prevent="handleLogin">
                    <input type="email" v-model="formData.email" placeholder="email">
                    <input type="password" v-model="formData.password" placeholder="password">
                    <button type="submit">Sign In</button>
            </form>
        </div>
        <h1 v-if="$store.state.authenticated">Authenticated</h1>
    </div>
</template>

<script>
import axios from 'axios'
import {API_BASE_URL} from '../config'

export default {
    name: 'adminlogin',
    data() {
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        handleLogin() {
            try {
                axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', this.formData).then(respone => {
                    this.$store.commit("setAuthentication", true);
                    this.$router.replace({name:"admin"})
                    }
                )})
    //            if (succces == true){
  //                  this.$store.commit("setAuthentication", true);
 //                   this.$router.replace({name:"admin-page"}),
 //                   succces = false
//                }

            }
            catch (e){

            }
        }
    }
}
</script>

<style scoped>

</style>
