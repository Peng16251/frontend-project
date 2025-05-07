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
	state() {},
	mutations: {},
	actions: {},
});
