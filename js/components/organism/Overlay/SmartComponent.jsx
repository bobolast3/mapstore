import React, { useState } from "react";
import Overlay from "./DumbComponent";
import Draggable from "react-draggable";

const SmartComponent = ({ isDraggable = true, ...rest }) => {
  const [isCollapsed, setIsCollapsed] = useState(rest.isCollapsed);

  const handleCollapseButtonClick = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return isDraggable ? (
    <Draggable>
      <Overlay
        {...rest}
        isCollapsed={isCollapsed}
        handleCollapseButtonClick={handleCollapseButtonClick}
      />
    </Draggable>
  ) : (
    <Overlay
      {...rest}
      isCollapsed={isCollapsed}
      handleCollapseButtonClick={handleCollapseButtonClick}
    />
  );
};

export default SmartComponent;
