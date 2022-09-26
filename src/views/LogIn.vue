<template>
    <div id="login">
        <h2>Log In</h2>
        <form @submit.prevent="logIn">
            <div class="input-class">
                <label for="email">Your Email</label>
                <input v-model="formData.email" type="email" name="email" placeholder="Enter Your Email">
            </div>
            <div class="input-class">
                <label for="password">Your Password</label>
                <input v-model="formData.password" type="text" name="password" placeholder="Enter Your Password">
            </div>
            <div class="input-class-btn">
                <input type="submit" value="Log In">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LogIn',
    data() {
        return {
            formData: {
                email: '',
                password: '',
            },
        }
    },
    methods: {
        logIn() {
            this.axios.post('login', this.formData).then(res => {
                this.$store.commit('SET_USER', res.data.user)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem("auth", true);
                //  this.$router.push('/')
                this.$router.go(-1)
            })
        }
    }
}
</script>