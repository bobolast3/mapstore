import React from "react";
import { createPlugin } from "@mapstore/utils/PluginsUtils";
import HeaderOrganism from "@js/components/organism/Header/DumbComponent";
import { theme } from "../../themes/mui/theme";
import { ThemeProvider } from "@material-ui/core/styles";

import RunAndSearchOverlay from "../components/organism/RunAndSearchFormOverlay/SmartComponent";
import RunAndSearchFormResultOverlay from "../components/organism/RunAndSearchFormResultOverlay/SmartComponent";
import config from "../../configs/config.json";

const TemplateComponent = () => {
  const data = [];
  return (
    <ThemeProvider theme={theme}>
      <div className="template__components-container">
        {config.header.isVisible && <HeaderOrganism />}
        {config.searchAndRunForm.isOpen && (
          <div className="run-search-overlay">
            <RunAndSearchOverlay />
          </div>
        )}
        {config.searchAndRunFormResult.isOpen && (
          <div className="run-search-overlay run-search-overlay--result">
            <RunAndSearchFormResultOverlay />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default createPlugin("coastal-ops-template", {
  component: TemplateComponent,
});
