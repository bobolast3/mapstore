import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const TooltipMolecule = ({
  title,
  children,
  isIcon,
  position = "top",
  ...props
}) => {
  return (
    <Tooltip {...props} title={title} placement={position} arrow>
      {isIcon ? <IconButton>{children}</IconButton> : children}
    </Tooltip>
  );
};

export default TooltipMolecule;
