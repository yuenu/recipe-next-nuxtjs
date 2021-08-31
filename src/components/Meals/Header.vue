<template>
  <section class="meal__banner">
    <span class="meal__banner-text">
      {{ bannerText }}
    </span>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const bannerText = ref('bannerText')

    return { bannerText }
  },
})
</script>
