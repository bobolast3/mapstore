import React, { useState } from "react";
import DumbComponent from "./DumbComponent";
import config from "../../../../configs/config.json";

const SmartComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(config.header.menu.isOpen);
  const [isOverlayOpen, setIsOverlayOpen] = useState(
    config.header.menu.isOverlayOpen
  );
  const [overlayContent, setOverlayContent] = useState(null);
  const [overlayTitle, setOverlayTitle] = useState(null);

  const handleMenuButtonClick = (state) => {
    setIsCollapsed(!state);
  };

  const handleOverlayOpen = (content) => {
    setIsOverlayOpen(true);
    setOverlayContent(content);
  };

  const handleOverlayClose = () => {
    setIsOverlayOpen(false);
  };

  return (
    <DumbComponent
      isCollapsed={isCollapsed}
      onMenuButtonClick={handleMenuButtonClick}
      handleOverlayOpen={handleOverlayOpen}
      handleOverlayClose={handleOverlayClose}
      isOverlayOpen={isOverlayOpen}
      overlayContent={overlayContent}
      setOverlayTitle={setOverlayTitle}
      overlayTitle={overlayTitle}
    />
  );
};

export default SmartComponent;
