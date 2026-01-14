<template>
  <AppMenu />
  <OrderEditor v-if="orderStore.isEditing" />
  <OrderViewer v-else />
  <Notification v-model="orderStore.snackbar" />
</template>

<script setup lang="ts">
import AppMenu from './components/AppMenu.vue'
import OrderViewer from './components/OrderViewer.vue'
import OrderEditor from './components/OrderEditor.vue'
import { useOrderStore } from './stores/order'
import Notification from './components/Notification.vue'

const orderStore = useOrderStore()
</script>

<style scoped></style>
