<template>
<div>
  <h5>Please select an era</h5>
  <v-btn v-for="(item, index) in availableEras" :key="index" @click="$event => setEra(item)">{{item}}</v-btn>
</div>
</template>

<script>
export default {
  name: 'EraSelect',
  computed: {
    selectedGenre() {
      return this.$store.state.selectedGenre
    },
    availableEras() {
      return Object.keys(this.$store.state.genres[this.selectedGenre])
    }
  },
  methods: {
    setEra(value) {
      this.$store.commit('setState', {property: 'selectedEra', value})
    }
  }
}
</script>

<style>

</style>