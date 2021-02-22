import "./App.css";
import { YOUTUBE_API } from "./API/YOUTUBE_API";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { setSearchInput, getSearchValue } from "./redux/appSlice";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const [list, setList] = useState([]);
  const searchValue = useSelector(getSearchValue)
  console.log(list)
  const dispatch = useDispatch()
  const search = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchValue}&type=video&key=AIzaSyAm8O8_eJFmFCJkSjuWaLCCOjwDBxd4lmw`
    ).then((response) => response.json());

    setList(response.items);
  };
  const previewList = list.map((item, index)=>{
    return <div key={index}>
      <img src={item.snippet.thumbnails.medium.url}/>
  <p>{item.snippet.title}</p>
    </div>
  })
  
  return (
    <div className="App">
      <YouTube videoId="JViCymB5m2Q" />
      
    <input type='text' value={searchValue} onChange={e=>dispatch(setSearchInput(e.target.value))}/>
    <button onClick={search}>search</button>
    {list && previewList}
    </div>
  );
}

export default App;
