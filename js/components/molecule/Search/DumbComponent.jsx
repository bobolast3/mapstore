import React from "react";
import { InputAdornment } from "@material-ui/core";
import TextFieldMolecule from "../Form/Textfield/Uncontrolled/DumbComponent";
import TooltipMolecule from "../Tooltip/DumbComponent";
import IconAtom from "../../atom/Icon/DumbComponent";
import config from "../../../../configs/config.json";

const SearchMolecule = () => {
  return (
    <div className="search-location">
      <TextFieldMolecule
        id="Search"
        label={config.header.search.title}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <TooltipMolecule
                isIcon={true}
                title={config.header.search.tooltipTitle}
              >
                <IconAtom iconName={config.header.search.iconName} />
              </TooltipMolecule>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchMolecule;
