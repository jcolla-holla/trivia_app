import axios from "axios";

export const getUser = (userId) => {
  return axios.get(`/api/users/${userId}`);
};

export const getUserScores = (userId) => {
  return axios.get(`/api/users/${userId}/scores`);
};
