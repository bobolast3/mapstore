import React from "react";

import FormMolecule from "../../molecule/Form/Form/SmartComponent";
import Overlay from "../Overlay/SmartComponent";
import config from "../../../../configs/config.json";

const DumbComponent = ({ isOpen, handleOverlayClose }) => {
  return (
    <Overlay
      title={config.searchAndRunForm.title}
      allowClose={config.searchAndRunForm.allowClose}
      isCollapsed={config.searchAndRunForm.isCollapsed}
      isOpen={isOpen}
      handleOverlayClose={handleOverlayClose}
      isDraggable={config.searchAndRunForm.isDraggable}
    >
      <p>{config.searchAndRunForm.subtitle}</p>
      <FormMolecule
        fieldData={config.searchAndRunForm.form}
        buttonLabel={"Search"}
      />
    </Overlay>
  );
};

export default DumbComponent;

/*

*/
