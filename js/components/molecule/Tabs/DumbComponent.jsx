import { Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";

const DumbComponent = ({ fontSize, tabs, value, handleChange }) => {
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered={false}
      scrollButtons="auto"
      variant="scrollable"
      style={{ fontSize, textTranform: "Capitalize" }}
    >
      {tabs.map((tab, index) => (
        <Tab key={tab} label={tab} id={index} />
      ))}
    </Tabs>
  );
};

export default DumbComponent;
