import React from "react";

const PreviewVideoItem = ({url,title}) => {
  return (
    <div className="videoItem">
      <img src={url} />
      <h3>{title}</h3>
    </div>
  );
};
export default PreviewVideoItem;
