import React from "react";
import { connect } from "react-redux";
import { updateHasClicked } from "@js/actions/buttonTest";
import button from "@js/reducers/buttonTest";
import { createPlugin } from "@mapstore/utils/PluginsUtils";

const Check = () => {
  return null;
};

/*<div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 2000,
        width: "100vw",
        height: "90px",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#078aa3",
        alignItems: "center",
        color: "#fff",
        padding: "0 60px",
        //opacity: "0.8",
      }}
    >
      <div>project</div>
      <div>{"1" + 1}</div>
      <div>
        <div>project</div>
      </div>
    </div>*/
const Sample = connect()(Check);

export default createPlugin("ButtonTest", {
  component: Sample,
  reducers: {
    button,
  },
});
