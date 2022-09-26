<template>
    <div id="nav-bar">
        <h2><router-link to="/">jshakil</router-link></h2>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li v-if="!user"><router-link to="/login">Log In</router-link></li>
            <li v-if="!user"><router-link to="/signup">Sign Up</router-link></li>
            <li v-if="user" @click="logOut"><router-link to="/login">Log Out</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    computed: {
        user() {
         return  this.$store.getters.logInUser;
        }
    },
    methods: {
        logOut() {
            return this.$store.commit("REMOVE_USER", '');
        }
    },
}
</script>