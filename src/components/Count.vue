<template>
  <section>
    <div>Count: {{ count }}</div>
    <button @click="increment">increment</button>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const count = ref(0)

    function increment() {
      count.value++
    }

    return {
      count,
      increment,
    }
  },
})
</script>
