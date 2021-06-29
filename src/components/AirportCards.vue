<template>
  <div class="wrapper">
    <card v-for="airport in airports" :key="airport.abbreviation" class="card">
      <p>{{ airport.abbreviation }}</p>
      <p>{{ airport.name }}</p>
      <p>{{ airport.city }}, {{ airport.state }}</p>
    </card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  props: {
    airports: {
      type: Array,
      required: true
    }
  },
  components: {
    Card
  }
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}

.card {
  border: 3px solid;
  border-radius: .5rem;
  padding: 1rem;
  margin-bottom: 1rem;
}

.card p:first-child {
  font-weight: bold;
  font-size: 2.5rem;
  margin: 1rem 0;
}

.card p:last-child {
  font-style: italic;
  font-size: .8rem;
}
</style>
