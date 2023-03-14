<script setup lang="ts">
import { watchEffect } from 'vue';

export interface Props {
  open: boolean
}

export interface Emits {
  (e: 'close', value: boolean): void
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

const emit = defineEmits<Emits>()

</script>

<template>
  <Teleport to="#modalTeleport">
    <Transition name="fade">
      <div v-show="prop.open" class="fixed flex justify-center items-center left-0 top-0 right-0 bottom-0 z-50">
        <div class="absolute w-full h-full bg-black opacity-75" @click.self="emit('close', true)"></div>
        <div class="border-[1px] border-gray-600 min-w-[280px] min-h-[280px] bg-gray-800 p-2 rounded-lg z-10">
          <div class="w-full flex justify-end">
            <button
              class="bg-transparent border-[1px] hover:bg-yellow-400 pl-2 pr-2 transition-all ease-in duration-200 hover:text-black rounded-lg text-yellow-400"
              @click="emit('close', true)">X</button>
          </div>
          <slot />
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
