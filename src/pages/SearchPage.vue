<template>
  <div>
    <h2 class="title">搜尋結果： 植物</h2>
    <PostList>
      <PostItem v-for="n in 10"></PostItem>
    </PostList>

    <!-- <PostDetails /> -->
    <!-- <PostUpload /> -->
  </div>
</template>
<script setup lang="ts">
import PostItem from "../components/PostItem.vue";
import PostList from "../components/PostList.vue";
</script>
<style scoped>
.title {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 44px;
}
</style>
