<template>
  <div>
    <main class="form-signin w-25 m-auto mt-5">
      <form>

        <h1 class="h3 mb-3 fw-normal">Register</h1>
        <Input :label="'Name'" :type="'text'" :placeholder="'Name'" />

        <Input :label="'Email address'" :type="'email'"  :placeholder="'Email address'" />
        <Input :label="'Password'" :type="'password'" :placeholder="'Password'" />




        <Button type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "Register",
  components: {},

      computed : {

      isLoading () {
        return this.$store.state.auth.isLoading
      }

      },

  methods : {
    submitHandler (e) {
    e.preventDefault()
      const data = {
      username: 'samidsdsadaddas',
        email: 'jasdsddasdasaad@gmail.com',
        password: 'ddabdadassdhdasdsdadjk1'
      }
      this.$store.dispatch('register',data)
    }
  }

}
</script>

<style scoped>

</style>