import axios from "axios";

export const createScore = (scoreData) => {
    return axios.post("/api/scores/", scoreData);
};

export const updateScore = (scoreData) => {
    return axios.post(`/api/scores/${scoreData.id}`, scoreData);
}

export const getScores = () => {
    return axios.get("/api/scores/");
};

export const getTopTenScores = () => {
    return axios.get("/api/scores/topTen");
}