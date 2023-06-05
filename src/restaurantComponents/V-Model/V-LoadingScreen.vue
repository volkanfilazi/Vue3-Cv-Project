<script setup lang="ts">
import { watchEffect } from 'vue';

  export interface Props {
  open: boolean
}

const prop = withDefaults(defineProps<Props>(), {
  open: false
})

watchEffect(() => {
  if (prop.open) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }
})
</script>


<template>
  <Teleport to="#modalLoading">
    <Transition name="fade">
      <div v-show="prop.open" class="fixed flex justify-center items-center left-0 top-0 right-0 bottom-0 z-50">
        <div class="absolute w-full h-full bg-black flex justify-center items-center">
          <div class="text-yellow-400 font-bold text-xl"> <slot></slot>  <span class="animate-ping text-yellow-400">.</span></div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>