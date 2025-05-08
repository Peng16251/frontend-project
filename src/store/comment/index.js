import { createComment } from "../../apis/comment";
export const comment = {
	state() {
		return {
			list: []
		}
	},
	mutations: {},
	actions: {
		async addComment({ commit }, { content, postId }) {
			await createComment(content, postId);
			commit("increaseCommentCount", postId);
		},
	},
};
