import React, { useState } from "react";

const useOverlay = (initialState = true) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(initialState);

  const handleOverlayClose = () => {
    setIsOverlayOpen(false);
  };

  const handleOverlayOpen = () => {
    setIsOverlayOpen(true);
  };

  return { isOverlayOpen, handleOverlayClose, handleOverlayOpen };
};

export default useOverlay;
