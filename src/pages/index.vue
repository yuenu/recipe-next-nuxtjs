<template>
  <main class="main">
    <div class="main__container">
      <Hero />
      <Intro />
      <Feature />
      <Characteristics />
      <Contact :categories="categories" />
    </div>
  </main>
</template>

<script lang="ts">
// import axios from 'axios'

import { Component, Vue } from 'nuxt-property-decorator'
import Hero from '@/components/Home/Hero.vue'
import Intro from '@/components/Home/Introduction.vue'
import Characteristics from '@/components/Home/Characteristics.vue'
import Feature from '@/components/Home/Feature.vue'
import Contact from '@/components/Home/Contact.vue'

@Component({
  components: {
    Hero,
    Intro,
    Characteristics,
    Feature,
    Contact,
  },
})
export default class IndexPage extends Vue {}
//   setup() {
//     const categories = ref([])

//     // TODO: Handle error event
//     const { fetch } = useFetch(async () => {
//       const { data } = await axios.get(
//         'https://www.themealdb.com/api/json/v1/1/categories.php'
//       )
//       categories.value = data.categories
//     })
//     fetch()
//     return { categories }
//   },
// })
</script>
