import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const login = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users/login`, user);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const signup = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users`, user);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const updateUser = async (id, user) => {
  try {
    const { data } = await axios.put(`${apiUrl}/users/${id}`, user);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getUserDetails = async (userId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/users/${userId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/users`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const updateUserBusinessStatus = async (userId) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/users/${userId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
