<template>
  <div>
    <h5>Please select a genre</h5>
    <v-btn v-for="(item, index) in availableGenres" :key="index" @click="$event => setGenre(index)">{{index}}</v-btn>
  </div>

</template>

<script>
export default {
  name: 'SelectGenre',
  computed: {
    availableGenres() {
      return this.$store.state.genres
    }
  },
  methods: {
    async setGenre(value) {
      this.$store.commit('setState', {property: 'selectedGenre', value})
    }
  }
}
</script>

<style>

</style>