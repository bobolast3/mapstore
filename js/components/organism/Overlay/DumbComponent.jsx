import React from "react";
import TooltipMolecule from "../../molecule/Tooltip/DumbComponent";
import IconAtom from "../../atom/Icon/DumbComponent";

const DumbComponent = ({
  title,
  children,
  position = "center",
  handleOverlayClose,
  handleCollapseButtonClick,
  isOpen,
  isCollapsed,
  allowClose = true,
  ...rest
}) => {
  return (
    isOpen && (
      <div
        {...rest}
        className={`overlay-panel overlay-panel__position--${position}`}
      >
        {
          <>
            <div className="overlay-panel__title">
              <h2>{title}</h2>
              {allowClose ? (
                <TooltipMolecule isIcon={true} title={"Close"}>
                  <IconAtom
                    onClick={() => {
                      handleOverlayClose();
                    }}
                    iconName={"remove"}
                    width={"20px"}
                  />
                </TooltipMolecule>
              ) : (
                <TooltipMolecule
                  isIcon={true}
                  title={isCollapsed ? "Extend" : "Collapse"}
                >
                  <IconAtom
                    onClick={() => {
                      handleCollapseButtonClick();
                    }}
                    iconName={`chevron-${isCollapsed ? "down" : "up"}`}
                    width={"20px"}
                  />
                </TooltipMolecule>
              )}
            </div>
            {!isCollapsed && (
              <div className={`overlay-panel__content`}>{children}</div>
            )}
          </>
        }
      </div>
    )
  );
};

export default DumbComponent;
