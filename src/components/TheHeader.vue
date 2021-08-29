<template>
  <header class="header">
    <div class="header__container">
      <div class="header__top">
        <div class="header__phone">
          <a class="header__phone__link" href="tel: 0988-XXX-XXX">
            <Icon
              class="header__phone-icon"
              :name="'phone'"
              :color="'#fdb926'"
            />
            <span class="header__phone-text">0988-XXX-XXX</span>
          </a>
        </div>
        <div class="header__brand">
          <NuxtLink to="/" class="headerTop__brand--link">
            <img src="@/static/logo.png" alt="logo" />
          </NuxtLink>
        </div>
        <div class="header__address">
          <div class="header__address-icon">
            <Icon :name="'map-pin'" :color="'#fdb926'" />
          </div>
          <span class="header__address-text">台灣大道</span>
        </div>
      </div>
      <div class="header__bottom"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import Icon from '@/utils/icons/index.vue'

export default defineComponent({
  components: {
    Icon,
  },
  setup() {
    return {}
  },
})
</script>
