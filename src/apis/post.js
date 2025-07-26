import { request } from "../utils/request";
import { getJwtToken, getUser } from "./auth";
export async function createPost(image, description) {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("description", description);

  await fetch("/api/posts", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${getJwtToken()}`,
    },
  });
}

/**
 *
 * @param {string} filters 過濾條件
 * @returns
 */
export async function loadPosts(filters = "") {
  const data = await request("/api/posts" + (filters ? `?${filters}` : ""));
  return data;
}

export async function loadPostsByMe() {
  return loadPosts(`authorId=${getUser().id}`);
}

/**
 *
 * @param {"likes" | "favors"} type
 * @returns
 */
export async function loadPostsLikedOrFavoredByMe(type = "likes") {
  return loadPosts(`interactedByUserId=${getUser().id}&actionType=${type}`);
}

export async function likePost(id) {
  const response = await request(`/api/posts/${id}/like`, {
    method: "PUT",
  });
  return response.data;
}

export async function favorPost(id) {
  const response = await request(`/api/posts/${id}/favor`, {
    method: "PUT",
  });
  return response.data;
}
