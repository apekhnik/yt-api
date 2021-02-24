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
  get: async (query) =>{
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=20&type=video&key=AIzaSyAm8O8_eJFmFCJkSjuWaLCCOjwDBxd4lmw`
    )
    return response.json()
    
  }
  
};
