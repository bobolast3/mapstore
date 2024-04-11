import React from "react";
import FooterLogo from "../FooterLogo/DumbComponent";
import OverlayActionButton from "../OverlayActionButton/DumbComponent";

const DumbComponent = ({ onClick }) => {
  return (
    <div className="overlay-panel__action-button">
      <FooterLogo />

      <OverlayActionButton label={"Accept"} />
    </div>
  );
};

export default DumbComponent;
