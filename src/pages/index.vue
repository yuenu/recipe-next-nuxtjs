<template>
  <main class="main">
    <div class="main__container">
      <Hero />
      <Intro />
      <Feature />
      <Characteristics />
      <Contact />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Hero from '@/components/Home/Hero.vue'
import Intro from '@/components/Home/Introduction.vue'
import Characteristics from '@/components/Home/Characteristics.vue'
import Feature from '@/components/Home/Feature.vue'
import Contact from '@/components/Home/Contact.vue'

export default defineComponent({
  components: {
    Hero,
    Intro,
    Characteristics,
    Feature,
    Contact,
  },
})
</script>
