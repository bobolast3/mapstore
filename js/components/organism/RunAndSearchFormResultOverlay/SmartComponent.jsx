import React from "react";
import useOverlayClose from "../../../hooks/useOverlayClose";
import config from "../../../../configs/config.json";
import RunAndSearchFormResultOverlay from "./DumbComponent";

const SmartComponent = () => {
  const { isOverlayOpen, handleOverlayClose } = useOverlayClose(
    config.searchAndRunFormResult.isOpen
  );

  return (
    <RunAndSearchFormResultOverlay
      isOpen={isOverlayOpen}
      handleOverlayClose={handleOverlayClose}
    />
  );
};

export default SmartComponent;
