<template>
  <div>
    <h1>Welcome to song quiz</h1>
    <SelectGenre />
  </div>
</template>

<script>
import spotifyUtils from '../utils/spotify'
import SelectGenre from '../components/SelectGenre.vue'
export default {
  name: "Landing",
  components: {
    SelectGenre
  },
  async mounted() {
    const accessToken = await spotifyUtils.getAccessToken()
    this.$store.commit('setState', { property: 'accessToken', value: accessToken})
  }
}
</script>
<style>
</style>