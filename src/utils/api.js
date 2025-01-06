// src/utils/api.js
const API_URL = 'https://chat-server-wgit.onrender.com/api';

export const loginUser  = async ({ username, password }) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  return data.token;
};

export const registerUser  = async ({ username, password }) => {
  await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
};

export const getMessages = async (userId) => {
  const response = await fetch(`${API_URL}/messages/${userId}`);
  return await response.json();
};