import {
	createPost,
} from "../../apis/post";
export const post = {
	state() { },
	mutations: {},
	actions: {
		async uploadPost({ commit, dispatch }, { image, description }) {
			await createPost(image, description);
			// 關閉對話匡並清空上傳的圖片
			commit("changeShowPostUpload", false);
		},
	},
};
