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
import { Component, Vue } from 'nuxt-property-decorator'
import Header from '@/components/Meals/Header.vue'
import Sidebar from '@/components/Meals/Sidebar.vue'

@Component({
  components: {
    Header,
    Sidebar,
  },
})
export default class MealsPage extends Vue {}
</script>
