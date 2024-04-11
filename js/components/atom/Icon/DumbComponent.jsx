import React from "react";

function Icon({ iconName, width, color = "#fff", ...props }) {
  return (
    <span
      className={`glyphicon glyphicon-${iconName}`}
      aria-hidden="true"
      style={{
        ...props.style,
        color,
        display: "inline-block",
        fontSize: width,
      }}
      {...props}
    ></span>
  );
}

export default Icon;
