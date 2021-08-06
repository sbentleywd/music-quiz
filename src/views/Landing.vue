<template>
  <h1>Welcome to song quiz</h1>
</template>

<script>
import spotifyUtils from "../utils/spotify";
export default {
  name: "Landing",
  async mounted() {
    const accessToken = await spotifyUtils.getAccessToken()
    this.$store.commit('setState', { property: 'accessToken', value: accessToken})
  }
}
</script>
<style>
</style>