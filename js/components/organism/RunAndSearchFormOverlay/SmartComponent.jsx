import React from "react";
import useOverlayClose from "../../../hooks/useOverlayClose";
import config from "../../../../configs/config.json";
import RunAndSearchFormOverlay from "./DumbComponent";

const SmartComponent = ({ ...rest }) => {
  const { isOverlayOpen, handleOverlayClose } = useOverlayClose(
    config.searchAndRunForm.isOpen
  );

  return (
    <RunAndSearchFormOverlay
      isOpen={isOverlayOpen}
      handleOverlayClose={handleOverlayClose}
    />
  );
};

export default SmartComponent;
