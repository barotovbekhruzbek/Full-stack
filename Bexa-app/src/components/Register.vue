<template>
  <div>
    <main class="form-signin w-25 m-auto mt-5">
      <form @click.prevent>

        <h1 class="h3 mb-3 fw-normal">Register</h1>
        <Input :label="'Name'" :type="'text'" :placeholder="'Name'" />

        <Input :label="'Email address'" :type="'email'"  :placeholder="'Email address'" />
        <Input :label="'Password'" :type="'password'" :placeholder="'Password'" />




        <Button type="submit">Register</Button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "Register",
  components: {}

}
</script>

<style scoped>

</style>