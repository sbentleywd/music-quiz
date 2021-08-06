<template>
  <div>
    <h5>Please select a genre</h5>
    <v-btn @click="getTracks">Indie</v-btn>
  </div>

</template>

<script>
import spotifyUtils from '../utils/spotify'
export default {
  name: 'SelectGenre',
  methods: {
    async getTracks() {
      spotifyUtils.getPlaylistTracks('37i9dQZF1DX7hXnntRGfka')
    }
  }
}
</script>

<style>

</style>