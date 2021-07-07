<template>
  <div>
    aaa
    <v-spacer></v-spacer>
    bbb
    <v-app>
      <Navbar/>
    <!-- <Navbar/>
    <v-main class="ma-4">
      <router-view></router-view>
    </v-main> -->
    </v-app>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  },
  data() {
    return {
      //
    }
  },
  computed: {
    //
  },
  watch: {
    //
  },
  created() {
    //
  },
  mounted() {
    // this.$router.push('/login')
  },
  methods: {
    //
  }
}
</script>

<style scoped></style>
