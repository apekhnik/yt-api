import "./App.css";
import { getVideoList } from "./redux/appSlice";
import { useSelector } from "react-redux";
import Header from './components/Header/Header'
import Content from './components/Content/Content'
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
      
      <Header/>
      <Content/>
      <div className="archive">{videoList && previewList}</div>
    </div>
  );
}

export default App;
