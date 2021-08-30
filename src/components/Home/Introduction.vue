<template>
  <section class="intro">
    <div class="intro__pic">
      <img src="@/assets/images/intro.png" alt="intro-pizza" />
    </div>
    <div class="intro__content">
      <div class="intro__heading">瑪格麗塔披薩</div>
      <div class="intro__rating">star star star star star</div>
      <div class="intro__desctiption">
        瑪格麗特披薩（Margherita）是義大利的一種披薩餅，也是拿坡里披薩的代表。一般說法認為瑪格麗特披薩這個名字是來自於義大利王妃瑪格麗特。由於瑪格麗特王妃認為這種披薩上「綠色的羅勒、白色的莫薩里拉乾酪、紅色的番茄醬好比義大利國旗」，對這種披薩十分鍾愛，因此用自己的名字命名了這款披薩。發明瑪格麗塔披薩的店家至今仍無定論，拿坡里的兩家披薩店Pietro...
        e basta così（現改名為Pizzeria Brandi）和Pizzeria Antica
        Port'Alba都自稱是瑪格麗塔披薩的發明者。
      </div>
      <button class="ctaBtn text-dark">{{ $t('home.ctaBtn') }}</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>
