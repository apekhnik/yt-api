import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import YouTube from "react-youtube";
import cl from "classnames";
import {
  getSelectedVideo,
  getVideoList,
  setVideoList,
} from "../../redux/appSlice";
import PreviewVideoItem from "../previewItem/PreviewVideoItem";
import "./style.sass";
const Content = () => {
  const selectedVideo = useSelector(getSelectedVideo);
  const dispatch = useDispatch();
  const videoList = useSelector(getVideoList);
  const opts = {
    height: "360",
    width: "720",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const previewList = videoList.map((item, index) => {
    return (
      <PreviewVideoItem
        videoId={item.id.videoId}
        key={index}
        url={item.snippet.thumbnails.medium.url}
        title={item.snippet.title}
        channelTitle={item.snippet.channelTitle}
        publishedAt={item.snippet.publishedAt}
      />
    );
  });
  const classes = cl(
    !selectedVideo ? "searchList__full" : "searchList__sidebar"
  );
  useEffect(async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${"cat"}&maxResults=50&type=video&key=AIzaSyAm8O8_eJFmFCJkSjuWaLCCOjwDBxd4lmw`
    ).then((response) => response.json());

    dispatch(setVideoList(response.items));
  }, []);
  return (
    <div className="content">
      <div className="sidebar"></div>
      {selectedVideo && (
        <div className="videoPlayer">
          <YouTube videoId={selectedVideo} opts={opts} />
        </div>
      )}
      <div className={classes}>{videoList && previewList}</div>
    </div>
  );
};
export default Content;
