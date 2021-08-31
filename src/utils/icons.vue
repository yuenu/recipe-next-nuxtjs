<template>
  <div v-if="isGetResource" ref="iconEl" class="icon" v-html="iconName" />
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  watchEffect,
} from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const iconEl = ref<HTMLDivElement>()
    const iconName = ref('')
    const isGetResource = ref(false)

    onMounted(() => {
      try {
        iconName.value = require(`@/assets/icons/${props.name}.svg?raw`)
        isGetResource.value = true
      } catch (_e) {
        isGetResource.value = false
      }
    })

    watchEffect(() => {
      if (isGetResource.value && iconEl.value && props.color) {
        const svgEl = iconEl.value.children[0] as HTMLOrSVGImageElement
        svgEl.style.fill = props.color
      }
    })
    return {
      iconName,
      isGetResource,
      iconEl,
    }
  },
})
</script>
