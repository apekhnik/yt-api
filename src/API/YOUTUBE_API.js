import axios from "axios";

const KEY = "AIzaSyAm8O8_eJFmFCJkSjuWaLCCOjwDBxd4lmw";

const instanse = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
  headers: {},
});
export const YOUTUBE_API = {
  get: (query) =>
    instanse.get("/search", {
      params: {
        q: query,
      },
    }),
};
