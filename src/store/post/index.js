import {
	createPost,
	loadPosts,
	likePost,
	favorPost,
} from "../../apis/post";
export const post = {
	state() {
		return { list: [], };
	},
	mutations: {
		initializePosts(state, posts) {
			state.list = posts;
		},
		toggleLike(state, { id, isLike }) {
			const post = state.list.find((post) => post.id === id);
			if (isLike) {
				post.liked_bies = (post.liked_bies || 0) + 1;
			} else {
				post.liked_bies--;
			}
			post.likedByMe = isLike;
		},
		toggleFavor(state, { id, isFavor }) {
			const post = state.list.find((post) => post.id === id);
			if (isFavor) {
				post.favored_bies = (post.favored_bies || 0) + 1;
			} else {
				post.favored_bies--;
			}
			post.favoredByMe = isFavor;
		},
	},
	actions: {
		async uploadPost({ commit, dispatch }, { image, description }) {
			await createPost(image, description);
			dispatch("loadAllPosts");
			// 關閉對話匡並清空上傳的圖片
			commit("changeShowPostUpload", false);
		},
		async loadAllPosts({ commit }) {
			const posts = await loadPosts();
			commit("initializePosts", posts);
		},
		async toggleLike({ commit }, id) {
			const isLike = await likePost(id);
			commit("toggleLike", { id, isLike });
		},
		async toggleFavor({ commit }, id) {
			const isFavor = await favorPost(id);
			commit("toggleFavor", { id, isFavor });
		},
	},
};
