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
		return {
			showPostUpload: false,
			showPostDetails: false
		};
	},
	mutations: {
		changeShowPostUpload(state, show) {
			state.showPostUpload = show;
		},
		changeShowPostDetails(state, show) {
			state.showPostDetails = show;
		}
	},
	actions: {},
});
