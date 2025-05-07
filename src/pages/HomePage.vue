<template>
  <div>
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
<style scoped></style>
