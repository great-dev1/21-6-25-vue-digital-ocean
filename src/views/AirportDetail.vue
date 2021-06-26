<template>
  <div v-if="airport">
    <p>{{ airport.name }} ({{ airport.abbreviation }})</p>
    <p>Located in {{ airport.city }}, {{ airport.state }}</p>
    <router-view />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import airports from '@/data/airports.js'
import router from '@/router'

export default {
  setup () {
    const route = useRoute()
    const airport = computed(() => {
      return airports.filter(a => a.abbreviation === route.params.code.toUpperCase())[0]
    })

    onMounted(() => {
      if (!airport.value) {
        router.push({ name: 'PageNotFound' })
      }
    })

    return { airport }
  }
}
</script>
