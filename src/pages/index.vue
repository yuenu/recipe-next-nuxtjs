<template>
  <main>
    <Count />
    <Icon :name="'mail'" :color="'yellow'" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Icon from '@/utils/icons/index.vue'

export default defineComponent({
  components: {
    Icon,
  },
})
</script>
