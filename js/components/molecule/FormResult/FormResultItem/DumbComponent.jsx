import React from "react";

const DumbComponent = ({ item }) => {
  return (
    <div className="form-result__item">
      <span className="form-result__label">{item.label}</span>
      <span className="form-result__value">{item.value}</span>
    </div>
  );
};

export default DumbComponent;
