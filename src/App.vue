<template>
  <div>
    <nav-bar />
    <router-view/>
  </div>
</template>

<script>
import './assets/scss/main.scss'
import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar,
  },
  created() {
    let getToken = localStorage.getItem('token')
    if(getToken) {
      return this.$store.dispatch("GET_USER");
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
