import { request } from "../utils/request";

export function getJwtToken() {
	return localStorage.getItem("jwtToken");
}

export function setJwtToken(jwt) {
	return localStorage.setItem("jwtToken", jwt);
}

export function saveUser(user) {
	localStorage.setItem("user", JSON.stringify(user));
}

export function getUser(user) {
	return JSON.parse(localStorage.getItem("user"));
}

export async function register(email, username, password) {
	try {
		const result = await request("/api/auth/local/register", {
			method: "POST",
			body: { email, username, password, name: username },
			auth: false,
		});

		if (!result || !result.jwt || !result.user) {
			throw new Error("註冊失敗");
		}

		setJwtToken(result.jwt);
		saveUser(result.user);
		return result.user;
	} catch (error) {
		throw new Error(
			error?.message
		);
	}
}

export async function login(email, password) {
	try {
		const result = await request("/api/auth/local", {
			method: "POST",
			auth: false,
			body: {
				identifier: email,
				password,
			},
		});

		if (!result || !result.jwt || !result.user) {
			throw new Error("登入失敗，請稍後再試");
		}

		setJwtToken(result.jwt);
		saveUser(result.user);
		return result.user;
	} catch (error) {
		throw new Error(error?.message );
	}
}

export function logout() {
	localStorage.removeItem("jwtToken");
	localStorage.removeItem("user");
}
