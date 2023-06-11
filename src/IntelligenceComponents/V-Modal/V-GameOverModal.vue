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
  <Teleport to="#intelligenceGameOverModal">
    <Transition name="fade">
      <div v-show="prop.open" class="fixed flex justify-center items-center left-0 top-0 right-0 bottom-0 z-50">
        <div class="absolute w-full h-full bg-black opacity-75" @click.self="emit('close', true)"></div>
        <div class="gameover-modal border-[1px] border-gray-600 min-h-[400px] bg-white p-2 rounded-lg z-10">
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

@media screen and (max-width: 400px) {
  .gameover-modal{
    width: 100%;
  }
}

@media screen and (min-width: 401px) {
  .gameover-modal{
    width: 70%;
  }
}

@media screen and (min-width: 760px) {
  .gameover-modal{
    width: 50%;
  }
}

@media screen and (min-width: 1020px) {
  .gameover-modal{
    width: 30%;
  }
}
</style>