<template>
  <v-snackbar v-model="model" :timeout="2000" color="#00A055">
    <div class="snackbar-box">
      <div v-html="checkIcon" />
      <span>Заказ успешно сохранён</span>
    </div>
    <template v-slot:actions>
      <div class="snackbar-closer" v-html="closeIcon" @click="model = false" />
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import checkIcon from '@/assets/icons/check.svg?raw'
import closeIcon from '@/assets/icons/close.svg?raw'

const model = defineModel({ type: Boolean })
</script>

<style scoped>
.snackbar-box {
  display: flex;
  gap: 12px;
  align-items: center;
  line-height: 0;
}
.snackbar-closer {
  cursor: pointer;
  margin-top: -32px;
}
</style>
