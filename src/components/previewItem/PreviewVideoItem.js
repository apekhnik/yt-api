import React from "react";
import "./style.sass";
const PreviewVideoItem = ({ url, title }) => {
  return (
    <div className="article">
      <img src={url} />
      <h3>{title}</h3>
    </div>
  );
};
export default PreviewVideoItem;
