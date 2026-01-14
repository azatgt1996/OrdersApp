<template>
  <AppMenu />
  <OrderEditor v-if="orderStore.isEditing" />
  <OrderViewer v-else />
</template>

<script setup lang="ts">
import AppMenu from './components/AppMenu.vue'
import OrderViewer from './components/OrderViewer.vue'
import OrderEditor from './components/OrderEditor.vue'
import { useOrderStore } from './stores/order'

const orderStore = useOrderStore()
</script>

<style scoped></style>
