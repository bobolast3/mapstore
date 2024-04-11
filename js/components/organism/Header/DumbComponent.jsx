import React from "react";
import ImageLinkAtom from "../../atom/ImageLink/DumbComponent";
import Logo from "../../../../assets/logo_white-300x113.png";
import TooltipMolecule from "../../molecule/Tooltip/DumbComponent";
import SearchMolecule from "../../molecule/Search/DumbComponent";
import MenuMolecule from "../../molecule/Menu/SmartComponent";
import config from "../../../../configs/config.json";

const HeaderOrganism = () => {
  const img = (
    <div style={{ width: "6rem", height: "auto" }}>
      <img style={{ width: "100%", height: "100%" }} src={Logo} />
    </div>
  );

  return (
    <header className="header-organism">
      <TooltipMolecule isIcon={true} title={"Visit ocims"}>
        <ImageLinkAtom href={config.header.logo.link} img={img} />
      </TooltipMolecule>

      <h1>{config.header.title}</h1>

      <SearchMolecule />
      <MenuMolecule />
    </header>
  );
};

export default HeaderOrganism;
