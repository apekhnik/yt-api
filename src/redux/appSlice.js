import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    searchInput: "",
    selectedVideo: "",
  },
  reducers: {
    setSearchInput: (state, action) => {

        state.searchInput = action.payload
    },
    setSelectedVideo: (state, action ) => {
        state.selectedVideo = action.payload
    }
  },
});

export const {setSearchInput, setSelectedVideo} = appSlice.actions;
export const getSearchValue = state => state.app.searchInput
export default appSlice.reducer;
