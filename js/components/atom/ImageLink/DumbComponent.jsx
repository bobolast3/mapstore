import React from "react";

const ImageLink = ({ href, img, ...props }) => {
  return (
    <a href={href} {...props}>
      {img}
    </a>
  );
};

export default ImageLink;
