import React from "react";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";
import cl from "classnames";
import { getSelectedVideo, getVideoList } from "../../redux/appSlice";
import PreviewVideoItem from "../previewItem/PreviewVideoItem";
import "./style.sass";
const Content = () => {
  const selectedVideo = useSelector(getSelectedVideo);
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
      />
    );
  });
  const classes = cl(
    !selectedVideo ? "searchList__full" : "searchList__sidebar"
  );
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
