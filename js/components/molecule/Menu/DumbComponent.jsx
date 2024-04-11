import React from "react";
import IconAtom from "../../atom/Icon/DumbComponent";
import TooltipMolecule from "../Tooltip/DumbComponent";
import Overlay from "../../organism/Overlay/SmartComponent";
import config from "../../../../configs/config.json";
import Disclaimer from "../MenuContent/Disclaimer/DumbComponent";
import Help from "../MenuContent/Help/DumbComponent";
import About from "../MenuContent/About/DumbComponent";

const DumbComponent = ({
  isCollapsed,
  onMenuButtonClick,
  handleOverlayOpen,
  handleOverlayClose,
  isOverlayOpen,
  overlayContent,
  overlayTitle,
  setOverlayTitle,
}) => {
  const options = config.header.menu.options;

  return (
    <>
      <div style={{ position: "relative" }}>
        <div className="menu-options">
          <div className="menu-options__icon-container">
            <TooltipMolecule
              onClick={() => {
                onMenuButtonClick(isCollapsed);
              }}
              isIcon={true}
              title={"search"}
            >
              <IconAtom iconName="menu-hamburger" width={"24px"} />
            </TooltipMolecule>
          </div>

          {isCollapsed &&
            options.map((option, index) => {
              const Component = {
                Disclaimer,
                Help,
                About,
              }[option.componentName];
              return (
                <div
                  key={index}
                  style={{ top: `${(index + 1) * 48}px` }}
                  className="menu-options__icon-container"
                >
                  <TooltipMolecule
                    isIcon={true}
                    title={option.title}
                    position="left"
                  >
                    <IconAtom
                      onClick={() => {
                        handleOverlayOpen(<Component />);
                        setOverlayTitle(option.title);
                      }}
                      iconName={option.iconName}
                      width={"24px"}
                    />
                  </TooltipMolecule>
                </div>
              );
            })}
        </div>
      </div>

      <div className="menu-overlay">
        <Overlay
          isOpen={isOverlayOpen}
          title={overlayTitle}
          handleOverlayClose={handleOverlayClose}
          isCollapsed={false}
          isDraggable={config.header.menu.isDraggable}
        >
          {overlayContent}
        </Overlay>
      </div>
    </>
  );
};

export default DumbComponent;
