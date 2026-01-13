<template>
  <AppMenu />
  <OrderViewer v-if="orderStore.mode === 'view'" />
  <OrderEditor v-else />
</template>

<script setup lang="ts">
import AppMenu from './components/AppMenu.vue'
import OrderViewer from './components/OrderViewer.vue'
import OrderEditor from './components/OrderEditor.vue'
import { useOrderStore } from './stores/order'

const orderStore = useOrderStore()
</script>

<style scoped></style>
