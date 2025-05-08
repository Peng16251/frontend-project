import {
	createPost,
	loadPosts
} from "../../apis/post";
export const post = {
	state() {
		return { list: [], };
	},
	mutations: {
		initializePosts(state, posts) {
			state.list = posts;
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
		}
	},
};
