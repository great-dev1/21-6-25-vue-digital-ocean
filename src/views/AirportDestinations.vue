<template>
  <h1>Destinations for {{ airport.name }} ({{ airport.abbreviation }})</h1>
  <h2>Passenger</h2>
  <ul>
    <li v-for="(destination, i) in airport.destinations.passenger" :key="i">
      {{ destination }}
    </li>
  </ul>
  <h2>Cargo</h2>
  <ul>
    <li v-for="(destination, i) in airport.destinations.cargo" :key="i">
      {{ destination }}
    </li>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import airports from '@/data/airports.js'

export default {
  setup () {
    const route = useRoute()
    const airport = computed(() => {
      return airports.filter(a => a.abbreviation === route.params.code.toUpperCase())[0]
    })
    return { airport }
  }
}
</script>
