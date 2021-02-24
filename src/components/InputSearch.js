import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchValue, setSearchInput, setVideoList } from "../redux/appSlice";
import { YOUTUBE_API } from "../API/YOUTUBE_API";

const InputSearch = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(getSearchValue);

  const search = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchValue}&maxResults=20&type=video&key=AIzaSyAm8O8_eJFmFCJkSjuWaLCCOjwDBxd4lmw`
    ).then((response) => response.json());

    dispatch(setVideoList(response.items))
  };
 
  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => dispatch(setSearchInput(e.target.value))}
      />
      <button onClick={search}>search</button>
    </div>
  );
};
export default InputSearch;
