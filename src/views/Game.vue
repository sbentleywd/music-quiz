<template>
  <h1>Lets Play</h1>
</template>

<script>
import spotifyUtils from '../utils/spotify'
export default {
  name: 'Game',
  computed: {
    selectedGenre() {
      return this.$store.state.selectedGenre
    },
    selectedEra() {
      return this.$store.state.selectedEra
    },
    selectedPlaylistId() {
      return this.$store.state.genres[this.selectedGenre][this.selectedEra]
    }
  },
  methods: {
    async getTracks() {
      return spotifyUtils.getPlaylistTracks(this.selectedPlaylistId)
    }
  },
  async mounted() {
    const tracks = await this.getTracks()
    this.$store.commit('setState', {property: 'playlistTracks', value: tracks})
  }
}
</script>

<style>

</style>