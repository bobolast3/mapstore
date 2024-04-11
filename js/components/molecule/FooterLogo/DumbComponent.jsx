import React from "react";
import Logo from "../../../../assets/footer_logos.jpg";
import ImageCaptioned from "../ImageCaptioned/DumbComponent";

const DumbComponent = () => {
  return <ImageCaptioned src={Logo} alt="footer logo" />;
};

export default DumbComponent;
