import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    searchInput: "",
    selectedVideo: "",
    videoList:[]
  },
  reducers: {
    setSearchInput: (state, action) => {
        state.searchInput = action.payload
    },
    setSelectedVideo: (state, action ) => {
        state.selectedVideo = action.payload
    },
    setVideoList: (state, action) => {
      state.videoList = action.payload
    }
  },
});

export const {setSearchInput, setSelectedVideo, setVideoList} = appSlice.actions;
export const getSearchValue = state => state.app.searchInput
export const getVideoList  = state => state.app.videoList
export default appSlice.reducer;
