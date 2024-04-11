import React from "react";
import Tabs from "../../TabComponent/DumbComponent";
import howItWorksImg from "../../../../../assets/how_tool_works1.jpg";
import additionalOptionsImg from "../../../../../assets/additional_options1.jpg";
import Image from "../../ImageCaptioned/DumbComponent";

const DumbComponent = () => {
  const tabs = [
    {
      title: "How the tool works",
      content: <Image src={howItWorksImg} alt="how it works" />,
    },
    {
      title: "Additional Options",
      content: <Image src={additionalOptionsImg} alt="additional options" />,
    },
  ];
  return <Tabs tabs={tabs} />;
};

export default DumbComponent;
