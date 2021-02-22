import "./App.css";
import { YOUTUBE_API } from "./API/YOUTUBE_API";
import { useEffect } from "react";
import YouTube from "react-youtube";
function App() {
  const [list, setList] = useState([])
  const search = (url) => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${url}&type=video&key=AIzaSyAm8O8_eJFmFCJkSjuWaLCCOjwDBxd4lmw`
    ).then((response) => response.json());
  }

    useEffect(async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${"swimming"}&type=video&key=AIzaSyAm8O8_eJFmFCJkSjuWaLCCOjwDBxd4lmw`
      ).then((response) => response.json());
      console.log(response);
    }, []);
  return (
    <div className="App">
      <YouTube videoId="pFN2n7CRqhw" />
    </div>
  );
}

export default App;
