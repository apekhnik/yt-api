import "./App.css";
import { getVideoList } from "./redux/appSlice";
import { useSelector } from "react-redux";
import InputSearch from "./components/InputSearch";
import PreviewVideoItem from "./components/previewItem/PreviewVideoItem";
function App() {
  const videoList = useSelector(getVideoList);

  const previewList = videoList.map((item, index) => (
    <PreviewVideoItem
      key={index}
      url={item.snippet.thumbnails.medium.url}
      title={item.snippet.title}
    />
  ));

  return (
    <div className="App">
      {/* <YouTube videoId="JViCymB5m2Q" /> */}
      <InputSearch />
      <div className="archive">{videoList && previewList}</div>
    </div>
  );
}

export default App;
