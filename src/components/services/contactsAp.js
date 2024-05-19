import axios from "axios";
const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com/docs/#/",
});
export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () =>
  (instance.defaults.headers.common.Authorization = "");
export const apiCreateNewUser = async (formData) => {
  const { data } = await instance.post("/users/signup", formData);
  return data;
};
export const apiLoginUser = async (formData) => {
  const { data } = await instance.post("/users/login", formData);
  return data;
};
export const apiLogoutUser = async () => {
  await instance.post("/users/logout");
  return;
};
export const apiGetInfoUser = async () => {
  const { data } = await instance.get("/users/current");
  return data;
};

export const apiRequest = async () => {
  const { data } = await instance.get("/contacts");
  return data;
};
export const addContact = async (contact) => {
  const { data } = await instance.post("/contacts", contact);
  return data;
};
export const deleteContact = async (contactId) => {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  return data;
};
export const apiUpdateUser = async (contactId) => {
  const { data } = await instance.patch(`/contacts/${contactId}`);
  return data;
};
