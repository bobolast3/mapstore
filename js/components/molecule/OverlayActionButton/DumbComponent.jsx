import React from "react";

const DumbComponent = ({ label, onClick = () => {} }) => {
  return (
    <>
      <hr />
      <button onClick={onClick} className="custom-button">
        {label}
      </button>
    </>
  );
};

export default DumbComponent;
