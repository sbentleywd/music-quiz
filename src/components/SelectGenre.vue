<template>
  <div>
    <h5>Please select a genre</h5>
    <v-btn v-for="(item, index) in availableGenres" :key="index" @click="$event => setGenre(index)">{{index}}</v-btn>
  </div>

</template>

<script>
import spotifyUtils from '../utils/spotify'
export default {
  name: 'SelectGenre',
  computed: {
    availableGenres() {
      return this.$store.state.genres
    }
  },
  methods: {
    async getTracks() {
      spotifyUtils.getPlaylistTracks('37i9dQZF1DX7hXnntRGfka')
    },
    setGenre(value) {
      this.$store.commit('setState', {property: 'selectedGenre', value})
    }
  }
}
</script>

<style>

</style>