<template>
	<div>
		<div class="container">
			<Navbar />
			<RouterView />
		</div>
	</div>
</template>

<script>
import {Navbar} from '@/components'
import {RouterView} from 'vue-router'
import {mapState} from 'vuex'
export default {
	components: {Navbar},

  mounted() {
    this.$store.dispatch('getUser')

  }
}
</script>

<style></style>
