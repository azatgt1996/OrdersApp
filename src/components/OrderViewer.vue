<template>
  <header>Просмотр заказа</header>
  <section class="main-form">
    <div class="order-name">{{ order.name }}</div>
    <div class="order-tags">
      <div
        v-if="order.prepayment"
        class="tag prepayment"
      >
        Аванс
      </div>
      <div
        v-for="(el, index) in order.peculiarities"
        :key="index"
        class="tag"
      >
        {{ el }}
      </div>
    </div>
    <div class="order-info">
      <div
        class="info-item"
        v-for="(item, index) in orderInfo"
        :key="index"
      >
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>
    <div class="order-description">
      <div class="label">Описание заказа</div>
      <div class="text">{{ order.description }}</div>
    </div>
    <div class="button-box">
      <v-btn
        variant="flat"
        color="primary"
        @click="editOrder"
      >
        Редактировать
      </v-btn>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useOrderStore } from '@/stores/order'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const orderStore = useOrderStore()
const { order } = storeToRefs(orderStore)

const orderInfo = computed(() => {
  return [
    { label: 'Дедлайн', value: order.value.deadline },
    { label: 'Город', value: order.value.city },
    { label: 'Вид оплаты', value: order.value.paymentMethod },
    { label: 'Вес', value: `${order.value.weight} кг` },
  ]
})

function editOrder() {
  orderStore.isEditing = true
}
</script>

<style scoped>
.order-name {
  font-size: 20px;
  color: var(--dark-text-color);
  line-height: 28px;
  text-align: center;
  font-weight: 600;
}

.order-tags {
  display: flex;
  gap: 8px;
  margin: 8px 0;
}
.tag {
  background-color: #e1e4ee;
  color: var(--text-color);
  border-radius: 40px;
  line-height: 40px;
  padding-inline: 14px;
}
.tag.prepayment {
  background-color: #d4ffe0;
}

.order-info {
  display: flex;
  gap: 60px;
}
.info-item {
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.info-item .label {
  color: var(--light-text-color);
}
.info-item .value {
  font-weight: 600;
  color: var(--text-color);
}

.order-description {
  margin-top: 8px;
  white-space: break-spaces;
}
.order-description .label {
  color: var(--light-text-color);
  line-height: 26px;
}
.order-description .text {
  font-size: 14px;
  color: var(--text-color);
}

.button-box {
  display: flex;
  justify-content: end;
  margin-top: 20px;
}
.v-btn {
  width: 167px;
}
</style>
