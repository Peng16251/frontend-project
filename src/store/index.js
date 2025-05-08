import { createStore } from "vuex";
import { comment } from "./comment";
import { post } from "./post";
import { user } from "./user";

export const store = createStore({
	modules: {
		user,
		post,
		comment,
	},
	state() {
		return { showPostUpload: false };
	},
	mutations: {
		changeShowPostUpload(state, show) {
			state.showPostUpload = show;
		}
	},
	actions: {},
});
