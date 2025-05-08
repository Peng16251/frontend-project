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
  const result = await request("/api/auth/local/register", {
    method: "POST",
    body: { email, username, password, name: username },
    auth: false,
  });
  setJwtToken(result.jwt);
  saveUser(result.user);
  return result.user;
}

export async function login(email, password) {
  // try {
  const result = await request("/api/auth/local", {
    method: "POST",
    auth: false,
    body: {
      identifier: email, // strapi 使用 identifier 而不是 email
      password,
    },
  });
  setJwtToken(result.jwt);
  saveUser(result.user);
  return result.user;
  // } catch (error) {
  //   throw error;
  // }
}
