<template>
  <div>
    <h2 class="title">搜尋結果： {{ term }}</h2>
    <PostList>
      <PostItem v-for="post in searchResult" :post="post"></PostItem>
    </PostList>

    <!-- <PostDetails /> -->
    <!-- <PostUpload /> -->
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import PostItem from "../components/PostItem.vue";
import PostList from "../components/PostList.vue";

const store = useStore();
const searchResult = computed(() => store.state.post.searchResult);

const route = useRoute();
const term = computed(() => route.query.term);
</script>
<style scoped>
.title {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 44px;
}
</style>
