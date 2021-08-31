<template>
  <main class="main">
    <div class="main__container">
      <Header />
      <div class="wrapper">
        <Sidebar />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import Header from '@/components/Meals/Header.vue'
import Sidebar from '@/components/Meals/Sidebar.vue'

export default defineComponent({
  components: {
    Header,
    Sidebar,
  },
})
</script>
