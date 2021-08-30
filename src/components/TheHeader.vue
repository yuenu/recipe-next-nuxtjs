<template>
  <header class="header">
    <div class="header__container">
      <div class="header__top">
        <div class="header__phone">
          <a class="header__phone__link" href="tel: 0988-XXX-XXX">
            <Icon
              class="header__phone-icon"
              :name="'phone'"
              :color="'#FFDC80'"
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
            <Icon :name="'map-pin'" :color="'#FFDC80'" />
          </div>
          <span class="header__address-text">台灣大道</span>
        </div>
      </div>
      <div class="header__bottom">
        <div class="header__lang">
          <button class="header__lang-cn">簡</button>
          <button class="header__lang-tw">繁</button>
          <button class="header__lang-en">EN</button>
        </div>
        <nav ref="navEl" class="header__nav">
          <ul class="header__nav-list">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="#about">About</NuxtLink></li>
            <li><NuxtLink to="#meals">Meals</NuxtLink></li>
            <li><NuxtLink to="#contact">Contact</NuxtLink></li>
          </ul>
        </nav>
        <div class="header__social">
          <Icon
            v-for="social in socials"
            :key="social.id"
            :name="social.name"
            :color="social.color"
          />
        </div>
        <div class="header__control">
          <Icon :name="'search'" />
          <Icon :name="'heart'" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'

import Icon from '@/utils/icons/index.vue'
const socials = [
  {
    id: 1,
    name: 'facebook',
    color: '#4361ee',
  },
  {
    id: 2,
    name: 'twitter',
    color: '#1877f2',
  },
  {
    id: 3,
    name: 'instagram',
    color: '#F77737',
  },
]

export default defineComponent({
  components: {
    Icon,
  },
  setup() {
    const navEl = ref<HTMLElement>()
    const requestAnimationFrameTimer = ref(0)
    function toggleHeaderSticky() {
      if (navEl.value) {
        if (window.pageYOffset > 70) {
          navEl.value.classList.add('sticky')
        } else {
          navEl.value.classList.remove('sticky')
        }
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', () => {
        cancelAnimationFrame(requestAnimationFrameTimer.value)
        requestAnimationFrameTimer.value =
          requestAnimationFrame(toggleHeaderSticky)
      })
    })

    return {
      socials,
      navEl,
    }
  },
})
</script>
