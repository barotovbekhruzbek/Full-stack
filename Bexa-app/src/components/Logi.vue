<template>
  <div>
    <main class="form-signin w-25 m-auto mt-5">
      <form @click.prevent>

        <h1 class="h3 mb-3 fw-normal">Login</h1>



        <Input :label="'Email address'" :type="'email'"  :placeholder="'Email address'" />
        <Input :label="'Password'" :type="'password'" :placeholder="'Password'" />



        <Button type="submit">Login</Button>

      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "Logi",
  components: {}

}
</script>

<style scoped>

</style>