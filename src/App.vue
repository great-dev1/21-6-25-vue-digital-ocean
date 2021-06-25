<template>
  <div class="wrapper">
    <div v-for="airport in airports" :key="airport.abbreviation" class="airport">
      <p>{{ airport.abbreviation }}</p>
      <p>{{ airport.name }}</p>
      <p>{{ airport.city }}, {{ airport.state }}</p>
    </div>
  </div>
</template>

<script>
import DevData from './data/airports.development.mock'
import StagingData from './data/airports.staging.mock'

export default {
  name: 'App',
  computed: {
    airports () {
      if (process.env.NODE_ENV === 'development') return DevData
      else return StagingData
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}

.airport {
  border: 3px solid;
  border-radius: .5rem;
  padding: 1rem;
}

.airport p:first-child {
  font-weight: bold;
  font-size: 2.5rem;
  margin: 1rem 0;
}

.airport p:last-child {
  font-style: italic;
  font-size: .8rem;
}
</style>
