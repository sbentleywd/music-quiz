<template>
  <div>
    <h1>Welcome to song quiz</h1>
    <SelectGenre />
    <SelectEra v-if="selectedGenre"/>
  </div>
</template>

<script>
import spotifyUtils from '../utils/spotify'
import SelectGenre from '../components/SelectGenre.vue'
import SelectEra from '../components/SelectEra.vue'
export default {
  name: "Landing",
  components: {
    SelectGenre,
    SelectEra
  },
  computed: {
    selectedGenre() {
      return this.$store.state.selectedGenre
    }
  },
  async mounted() {
    const accessToken = await spotifyUtils.getAccessToken()
    this.$store.commit('setState', { property: 'accessToken', value: accessToken})
  }
}
</script>
<style>
</style>