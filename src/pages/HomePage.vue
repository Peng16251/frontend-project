<template>
  <div>
    <PostList>
      <PostItem v-for="n in 10"></PostItem>
    </PostList>

    <!-- <PostDetails /> -->
    <PostUpload v-if="showPostUpload" />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import PostItem from "../components/PostItem.vue";
import PostList from "../components/PostList.vue";
import PostUpload from "../components/PostUpload.vue";
import { useStore } from "vuex";

const store = useStore();
const showPostUpload = computed(() => {
  return store.state.showPostUpload;
});
</script>
<style scoped></style>
