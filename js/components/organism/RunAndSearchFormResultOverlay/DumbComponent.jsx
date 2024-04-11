import React from "react";

import FormResult from "../../molecule/FormResult/FormResult/DumbComponent";
import Overlay from "../Overlay/SmartComponent";
import config from "../../../../configs/config.json";

const DumbComponent = ({ isOpen, handleOverlayClose }) => {
  return (
    <Overlay
      isOpen={isOpen}
      title={config.searchAndRunFormResult.title}
      allowClose={config.searchAndRunFormResult.allowClose}
      isCollapsed={config.searchAndRunFormResult.isCollapsed}
      handleOverlayClose={handleOverlayClose}
      isDraggable={config.searchAndRunFormResult.isDraggable}
    >
      <FormResult data={config.searchAndRunFormResult.data} />
    </Overlay>
  );
};

export default DumbComponent;
