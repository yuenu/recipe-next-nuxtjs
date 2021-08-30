<template>
  <main class="main">
    <div class="main__container">
      <Hero />
      <Intro />
      <Characteristics />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Hero from '@/components/Home/Hero.vue'
import Intro from '@/components/Home/Introduction.vue'
import Characteristics from '~/src/components/Home/Characteristics.vue'

export default defineComponent({
  components: {
    Hero,
    Intro,
    Characteristics,
  },
})
</script>
