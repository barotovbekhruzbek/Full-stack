<template>
  <div class="container">
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <a class="d-flex align-items-center text-dark text-decoration-none">

        <span class="fs-4"><router-link to="/">Bexa Dev</router-link></span>
      </a>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <a class="me-3 py-2 text-dark text-decoration-none"><router-link to="login">Login</router-link></a>
        <a class="me-3 py-2 text-dark text-decoration-none"><router-link to="register">Register</router-link></a>

      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar.vue"
}
</script>

<style scoped>

</style>