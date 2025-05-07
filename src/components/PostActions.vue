<template>
  <span>張小風</span>
  <span class="postPubDate">12小時以前發布</span>
  <div class="postActions">
    <TheIcon icon="like" fill="none" stroke="#00000"></TheIcon>
    <span>1.5w</span>
    <TheIcon icon="comment" fill="none" stroke="#00000"></TheIcon>
    <span>9w</span>
    <TheIcon icon="like" fill="none" stroke="#00000"></TheIcon>
    <span>8k</span>
  </div>
</template>
<script setup lang="ts">
import TheIcon from "./TheIcon.vue";
</script>
<style scoped>
.postActions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  column-gap: 16px;
  row-gap: 4px;
}

.postActions > svg {
  width: 32px;
  height: 32px;
  grid-row: 1 / 2;
  cursor: pointer;
}

.postActions > span {
  font-size: 14px;
}
</style>
