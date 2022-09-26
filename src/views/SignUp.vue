<template>
    <div id="login">
        <h2>Sign Up</h2>
        <form @submit.prevent="signUp">
            <div class="input-class">
                <label for="name">Your Name</label>
                <input v-model="formData.name" type="text" name="name" placeholder="Enter Your Name">
            </div>
            <div class="input-class">
                <label for="email">Your Email</label>
                <input v-model="formData.email" type="email" name="email" placeholder="Enter Your Email">
            </div>
            <div class="input-class">
                <label for="number">Your Phone Number</label>
                <input v-model="formData.phone" type="text" name="phone" placeholder="Enter Your Phone Number">
            </div>
            <div class="input-class">
                <label for="password">Create Password</label>
                <input v-model="formData.password" type="text" name="password" placeholder="Create Your Password">
            </div>
            <div class="input-class">
                <label for="password_confirmation">Re-enter Your Password</label>
                <input v-model="formData.password_confirmation" type="text" name="password_confirmation" placeholder="Re-enter Your Password">
            </div>
            <div class="input-class-btn">
                <input type="submit" value="Sign Up">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                phone: '',
                password: '',
                password_confirmation: '',
            }
        }
    },
    methods: {
        signUp() {
            this.axios.post('register', this.formData).then(res => {
                this.$store.commit('SET_USER', res.data.user)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem("auth", true);
                this.$router.push('/')
            })
        }
    }
}
</script>