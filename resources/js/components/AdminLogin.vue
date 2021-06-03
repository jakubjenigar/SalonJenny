<template>
    <div>
        <div class="row">
            <form action="#" @submit.prevent="handleLogin">
                    <input type="email" v-model="formData.email" placeholder="email">
                    <input type="password" v-model="formData.password" placeholder="password">
                    <button type="submit">Sign In</button>
            </form>
        </div>
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
                )
                }
            )
        }
    }
}
</script>

<style scoped>

</style>
