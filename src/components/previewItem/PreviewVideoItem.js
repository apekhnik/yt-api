import React from "react";
import { useDispatch } from "react-redux";
import ReactTimeago from "react-timeago";
import { setSelectedVideo } from "../../redux/appSlice";
import "./style.sass";
const PreviewVideoItem = ({
  url,
  title,
  videoId,
  channelTitle,
  publishedAt,
}) => {
  const dispatch = useDispatch();
  const correctedTitle = (title) => `${title.slice(0, 35)}...`;
  const videoTitle = correctedTitle(title);
  return (
    <div
      className="videoItem"
      onClick={() => dispatch(setSelectedVideo(videoId))}
    >
      <img src={url} />
      <h3>{videoTitle}</h3>
      <h4>{channelTitle}</h4>
      <span>
        <ReactTimeago date={publishedAt} />
      </span>
    </div>
  );
};
export default PreviewVideoItem;
