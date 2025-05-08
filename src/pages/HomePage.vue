<template>
  <div>
    <PostList>
      <PostItem v-for="post in posts" :post="post" :key="post.id"></PostItem>
    </PostList>

    <PostDetails v-if="showPostDetails" />
    <PostUpload v-if="showPostUpload" />
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
import PostItem from "../components/PostItem.vue";
import PostList from "../components/PostList.vue";
import PostDetails from "../components/PostDetails.vue";
import PostUpload from "../components/PostUpload.vue";
import { useStore } from "vuex";

const store = useStore();
const showPostUpload = computed(() => {
  return store.state.showPostUpload;
});
const showPostDetails = computed(() => {
  return store.state.showPostDetails;
});

const posts = computed(() => {
  return store.state.post.list;
});

onMounted(() => {
  store.dispatch("loadAllPosts");
});
</script>
<style scoped></style>
