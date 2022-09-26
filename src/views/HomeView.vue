<template>
  <div class="home">
    <hero />
    <drage-file v-if="user"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import DrageFile from '@/components/DrageFile.vue'

export default {
  name: 'HomeView',
  components: {
    Hero,
    DrageFile,
  },
  computed: {
        user() {
         return  this.$store.getters.logInUser;
        }
    },
}

    Hero</script>
