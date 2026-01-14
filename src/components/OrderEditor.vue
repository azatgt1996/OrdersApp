<template>
  <header>Разместить заказа</header>
  <v-form class="main-form" @submit.prevent="saveOrder">
    <div class="flex-box">
      <v-text-field v-model="order.name" label="Название заказа*" variant="outlined" :rules="[requiredValidator, orderNameValidator]" />
      <v-text-field v-model="order.weight" label="Вес" variant="outlined" type="number" :rules="[orderWeightValidator]" />
    </div>
    <div class="flex-box">
      <v-text-field v-model="order.city" label="Город*" variant="outlined" :rules="[requiredValidator]" />
      <v-text-field v-model="order.deadline" label="Дедлайн*" variant="outlined" :rules="[requiredValidator, dateValidator]">
        <template #append-inner>
          <div v-html="calendarIcon" />
        </template>
      </v-text-field>
    </div>
    <v-select v-model="order.paymentMethod" label="Вид оплаты" :items="paymentMethodList" variant="outlined" />
    <v-checkbox v-model="order.prepayment" class="prepayment" label="Аванс" />
    <v-select v-model="order.peculiarities" label="Особенности" :items="peculiarityList" multiple variant="outlined" />
    <v-textarea
      label="Описание заказа"
      v-model="order.description"
      variant="outlined"
      persistent-hint
      :hint="`${order.description.length} / 500`"
    />
    <div class="button-box">
      <v-btn variant="flat" @click="resetOrder"> Отменить </v-btn>
      <v-btn variant="flat" color="primary" type="submit"> Сохранить </v-btn>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import calendarIcon from '@/assets/icons/calendar.svg?raw'
import { paymentMethodList, peculiarityList } from '@/constants/lists'
import { dateValidator, orderNameValidator, orderWeightValidator, requiredValidator } from '@/constants/validators'
import { deepEqual } from '@/helpers'
import { useOrderStore } from '@/stores/order'
import { storeToRefs } from 'pinia'
import { toRaw } from 'vue'

const orderStore = useOrderStore()
const { order } = storeToRefs(orderStore)

const resetedOrder = structuredClone(toRaw(order.value))

async function saveOrder(event: any) {
  const result = await event
  if (result.valid) {
    if (deepEqual(order.value, resetedOrder)) {
      orderStore.isEditing = false
      return
    }
    orderStore.saveOrder()
  }
}
async function resetOrder() {
  order.value = structuredClone(resetedOrder)
}
</script>

<style scoped>
.flex-box {
  display: flex;
  gap: 24px;
}
.flex-box .v-input {
  width: calc(50% - 12px) !important;
}
.button-box {
  display: flex;
  gap: 16px;
  margin-top: 24px;
}
.button-box .v-btn {
  width: calc(50% - 8px) !important;
}

.prepayment {
  margin-top: -24px;
  margin-bottom: -18px;
}
</style>
