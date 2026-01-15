<template>
  <div class="menu">
    <div
      class="menu-item"
      v-html="chatIcon"
    />
    <div
      class="menu-item"
      v-html="bellIcon"
    />
    <div class="person-block">
      <div
        class="menu-item"
        v-html="personIcon"
      />
      <div class="person-info">
        <div class="person-fullname">Иванов Иван</div>
        <div class="person-position">Сотрудник</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import chatIcon from '@/assets/icons/chat.svg?raw'
import bellIcon from '@/assets/icons/bell.svg?raw'
import personIcon from '@/assets/icons/person.svg?raw'
</script>

<style scoped>
.menu {
  height: 72px;
  background: white;
  border-radius: 0 0 8px 8px;
  padding: 12px 40px;
  display: flex;
  gap: 20px;
  justify-content: end;
}

.person-block {
  display: flex;
  gap: 8px;
}
.person-fullname {
  font-size: 14px;
  color: var(--text-color);
  font-weight: 500;
}
.person-position {
  font-size: 12px;
  color: #929db2;
  font-weight: 400;
}

.menu-item {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 9px;
  cursor: pointer;
  background-color: #f6f7fa;
}
</style>
