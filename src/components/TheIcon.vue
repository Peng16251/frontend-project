<template>
  <svg>
    <use :href="`${sprite}#icon-${icon}`"></use>
  </svg>
</template>
<script setup>
// 使用動態屬性時，無法直接寫圖片路徑，需要使用 import 匯入
import sprite from "../assets/icons/sprite.svg";

defineProps({
  icon: String,
});
</script>
