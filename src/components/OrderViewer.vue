<template>
  <header>Просмотр заказа</header>
  <section class="order-viewer">
    <div class="order-name">Полное название заказа</div>
    <div class="order-tags">
      <div class="tag prepayment">Аванс</div>
      <div class="tag">Дизайн</div>
      <div class="tag">B2B</div>
    </div>
    <div class="order-info">
      <div class="info-item" v-for="(item, index) in orderInfo" :key="index">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>
    <div class="order-description">
      <div class="label">Описание заказа</div>
      <div class="text">
        Необходимо создать фирменный стиль компании — полностью новый или на основе существующих наработок, логотипа, цветовых предпочтений
        или корпоративных материалов. Стиль должен отражать позиционирование бренда и включать все необходимые элементы: логотип, цветовую
        палитру, типографику, паттерны и макеты основных носителей с учётом специфики отрасли.
      </div>
    </div>
    <div class="button-box">
      <v-btn variant="flat" color="primary"> Редактировать </v-btn>
    </div>
  </section>
</template>

<script setup lang="ts">
const orderInfo = [
  { label: 'Дедлайн', value: '04.06.2025' },
  { label: 'Город', value: 'Москва' },
  { label: 'Вид оплаты', value: 'Наличные' },
  { label: 'Вес', value: '200 кг' },
]
</script>

<style scoped>
.order-name {
  font-size: 20px;
  color: #16181e;
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
.info-item .value {
  font-weight: 600;
}

.order-description {
  margin-top: 8px;
}
.order-description .text {
  font-size: 14px;
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
