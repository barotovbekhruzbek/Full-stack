<template>
  <main class="form-signin w-25 m-auto mt-5">
    <form>

      <h1 class="h3 mb-3 fw-normal mt-3">Register</h1>

      <Input :label="'Name'" :type="'text'" />
      <Input :label="'Email address'" :type="'email'" />
      <Input :label="'Password'" :type="'password'" />

      <Button type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>
    </form>
  </main>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    },
  },
  methods: {
    submitHandler(e) {
      e.preventDefault()
      const data = {
        username: 'sbe11sx',
        email: 'infwqwo@gmail.com',
        password: 'sawqdawa1131w',
      }
      this.$store
          .dispatch('register', data)
          .then(user => console.log('USER', user))
          .catch(err => console.log('ERROR', err))
    },
  },
}
</script>

<style></style>