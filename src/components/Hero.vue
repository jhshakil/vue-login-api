<template>
    <div id="hero">
        <h2 v-if="user">{{user.username}}, You are now Log In</h2>
        <h2 v-if="!user">You are now Log Out</h2>
        <!-- <p>{{user.firstName}}</p> -->
    </div>
</template>

<script>
export default {
    name: 'HerO',
    computed: {
        user() {
         return  this.$store.getters.logInUser;
        }
    }
}
</script>