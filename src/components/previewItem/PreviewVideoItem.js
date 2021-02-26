import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedVideo } from "../../redux/appSlice";
import "./style.sass";
const PreviewVideoItem = ({ url, title, videoId }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="article"
      onClick={() => dispatch(setSelectedVideo(videoId))}
    >
      <img src={url} />
      <h3>{title}</h3>
    </div>
  );
};
export default PreviewVideoItem;
