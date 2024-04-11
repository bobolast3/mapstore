import React from "react";

const DumbComponent = ({ src, caption = null }) => {
  return (
    <>
      <div className="image">
        <img src={src} />
        {caption && <span>{caption}</span>}
      </div>
    </>
  );
};

export default DumbComponent;
