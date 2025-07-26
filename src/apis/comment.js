import { request } from "../utils/request";

export async function createComment(content, postId) {
  await request("/api/comments", {
    method: "POST",
    body: {
      data: {
        content,
        post: postId,
      },
    },
  });
}

export async function loadComments(postId) {
  if (!postId) return [];
  const data = await request(
    `/api/comments?postId=${postId}`
  );

  return data;

}