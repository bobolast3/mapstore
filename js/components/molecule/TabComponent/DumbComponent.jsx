import React, { useState } from "react";
import Tabs from "../Tabs/DumbComponent";
import TabPanel from "../TabPanel/DumbComponent";

const DumbComponent = ({ tabs, fontSize = "16px" }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs
        value={value}
        handleChange={handleChange}
        fontSize={fontSize}
        tabs={tabs?.map((tab) => tab.title)}
      />

      {tabs?.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </>
  );
};

export default DumbComponent;
