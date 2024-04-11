import React from "react";

const DumbComponent = ({ index, value, children }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={index}
      aria-labelledby={index}
    >
      {value === index && children}
    </div>
  );
};

export default DumbComponent;
