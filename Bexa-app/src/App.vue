<template>
  <div>
  <Navbar />
  </div>

  <RouterView/>
</template>

<script>
import { RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue";
export default  {
  components: {
    Navbar
  }
}

</script>

<style>

</style>