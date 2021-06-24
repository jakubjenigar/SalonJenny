<template>
    <div>
<!--        <div class="row">-->
<!--            <form action="#" @submit.prevent="handleLogin">-->
<!--                    <input type="email" v-model="formData.email" placeholder="email">-->
<!--                    <input type="password" v-model="formData.password" placeholder="password">-->
<!--                    <button type="submit">Sign In</button>-->
<!--            </form>-->
<!--        </div>-->

        <v-container fill-height fluid>
            <v-row class="align-center">
                <v-col class="d-flex justify-center align-center">
                    <v-card>
                        <v-card-subtitle class="d-flex justify-center pb-4"><v-icon style="font-size: 40pt">pets</v-icon></v-card-subtitle>
                        <v-card-title style="font-family: Amatic SC; font-weight: 1000; font-size: 24pt;"> Prihláste sa do admin nástrojov Salón Jenny</v-card-title>

                        <v-form class="pl-6 pr-6 pb-6 pt-6" action="#" @submit.prevent="handleLogin">
                            <v-text-field type="email" v-model="formData.email" placeholder="E-mail"></v-text-field>
                            <v-text-field type="password" v-model="formData.password" placeholder="Heslo"></v-text-field>
                            <v-btn type="submit"
                                   block="block"  id="loginBtn">Prihlásiť</v-btn>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </div>


</template>

<script>
import axios from 'axios'

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
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', this.formData).then(response => {
                    this.$store.commit("setAuthentication", true)
                    this.$router.replace({name:"admin"})
                    }
                )  .catch(function (error) {
                    // handle error
                        console.log(error.response.data)
                        alert(error.response.data.message)
                    }
                ).then(response => {
                    console.log(response)
                    console.log(this.$store.state.authenticated)
                })
                }
            )
        }
    }
}
</script>

<style scoped>
#loginBtn{
    margin: 0 !important;
}

</style>
