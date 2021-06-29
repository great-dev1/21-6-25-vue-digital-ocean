<template>
  <AirportCards :airports="usAirports" />
  <airport-cards :airports="euAirports" />
  <card>
    <p>US Airports</p>
    <p>Total: {{ usAirports.length }}</p>
  </card>
  <card>
    <p>EU Airports</p>
    <p>Total: {{ euAirports.length }}</p>
  </card>
</template>

<script>
import { ref } from 'vue'
import AirportCards from '@/components/AirportCards.vue'
import usAirportData from '@/data/us-airports.js'
import euAirportData from '@/data/eu-airports.js'
import Card from '@/components/Card.vue'

export default {
  name: 'App',
  components: {
    AirportCards,
    Card
  },
  setup () {
    const usAirports = ref(usAirportData)
    const euAirports = ref(euAirportData)

    return { usAirports, euAirports }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
