<template>
  <div class="content">
    <div class="postList">
      <div class="postItem" v-for="n in 10">
        <img
          src=""
          alt=""
          width="100%"
          height="100%"
          style="background: #eee"
        />
        <div class="postInfo">
          <div class="postMeta">
            <TheAvatar />
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
          </div>
          <div class="postDesc">
            <p>
              這裡是貼文描述這裡是貼文描述這裡是貼文描述這裡是貼文描述這裡是貼文描述這裡是貼文描述這裡是貼文描述這裡是貼文描述這裡是貼文描述這裡是貼文描述...
            </p>
          </div>
        </div>
      </div>
    </div>
    <PostDetails />
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
// import { useStore } from "vuex";
import PostDetails from "../components/PostDetails.vue";
// import PostItem from "../components/PostItem.vue";
// import PostList from "../components/PostList.vue";
// import PostUpload from "../components/PostUpload.vue";
import TheAvatar from "../components/TheAvatar.vue";
import TheIcon from "../components/TheIcon.vue";

// const store = useStore();
// const showPostUpload = computed(() => store.state.showPostUpload);
// const showPostDetails = computed(() => store.state.showPostDetails);
// const posts = computed(() => store.state.post.list);

onMounted(() => {
  // store.dispatch("loadAllPosts");
});
</script>
<style scoped>
.postItem {
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

.postInfo {
  padding: 24px;
}

.postItem > img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  background: #eee;
  cursor: pointer;
}

.postMeta {
  display: grid;
  grid-template-areas:
    "avatar name actions"
    "pubDate pubDate actions";
  grid-template-columns: 42px 1fr 3fr;
  row-gap: 6px;
}
.postMeta .avatar {
  grid-area: avatar;
}

.postMeta .postPubDate {
  grid-area: pubDate;
  color: #9f9f9f;
  font-size: 14px;
}

.postActions {
  grid-area: actions;
  justify-self: end;
}

.postDesc {
  margin-top: 28px;
  white-space: pre-line;
}
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

.postList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}

.postDetails {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 300px);
  grid-template-rows: minmax(0, 1fr);
  width: 80vw;
  height: 80vh;
}
.postImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.postMeta {
  padding: 24px;
  padding-top: 36px;
  display: grid;
  align-items: start;
  grid-template-rows: max-content max-content 1fr max-content;
  max-height: 100%;
  height: 100%;
}

.author {
  display: flex;
  align-items: center;
  gap: 10px;
}
.postDesc {
  width: 100%;
  white-space: pre-wrap;
  margin-top: 24px;
}
.comments {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-gap: 28px;
  align-items: start;
  overflow-y: auto;
  height: 100%;
}
.comment {
  display: grid;
  grid-template-areas:
    "avatar name date"
    "comment comment comment";
  grid-template-columns: 34px 1fr 1fr;
  align-items: center;
  column-gap: 10px;
  row-gap: 14px;
}
.commentDate {
  grid-area: date;
  justify-self: end;
  color: #a7a7a7;
}
.commentContent {
  grid-area: comment;
}

.actions {
  border-top: 1px solid #eaeaea;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  margin: 20px -24px 0px -24px;
  padding: 20px 24px 0 24px;
  row-gap: 16px;
}

.postActions > :deep(svg) {
  transform: scale(0.8125);
}
.postPubDate {
  color: #9f9f9f;
  grid-column: 2 / 6;
  justify-self: end;
  font-size: 14px;
}
.commentInput {
  background: #f7f7f7;
  border-radius: 16px;
  border: none;
  grid-column: 1 / 4;
}
.commentInput::placeholder {
  color: #b9b9b9;
  border: none;
}
.commentPubBtn {
  color: #1da0ff;
  border: none;
  background: none;
  font-size: 16px;
  margin-left: 20px;
  grid-column: 4 / 6;
}
.content {
  width: 80vw;
  max-width: 1124px;
  margin: 0 auto;
  margin-top: 88px;
}
</style>
