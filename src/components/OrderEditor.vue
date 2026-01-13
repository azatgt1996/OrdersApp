<template>
  <header>Разместить заказа</header>
  <section class="order-editor">
    <div class="flex-box">
      <v-text-field label="Название заказа*" variant="outlined" />
      <v-text-field label="Вес" variant="outlined" type="number" />
    </div>
    <div class="flex-box">
      <v-text-field label="Город*" variant="outlined" />
      <v-text-field label="Дедлайн*" variant="outlined">
        <template #append-inner>
          <div v-html="calendarIcon" />
        </template>
      </v-text-field>
    </div>
    <v-select label="Вид оплаты" :items="['Наличные', 'Банковская карта']" variant="outlined" />
    <v-checkbox class="prepayment" label="Аванс" />
    <v-select label="Особенности" :items="['Дизайн', 'B2B', 'Test', 'Demo']" multiple variant="outlined" />
    <v-textarea label="Описание заказа" v-model="text" variant="outlined" persistent-hint :hint="`${text.length} / 500`" />
    <div class="button-box">
      <v-btn variant="flat"> Отменить </v-btn>
      <v-btn variant="flat" color="primary"> Сохранить </v-btn>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import calendarIcon from '@/assets/icons/calendar.svg?raw'

const text = ref('')
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
