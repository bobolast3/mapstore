import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createPlugin } from "@mapstore/utils/PluginsUtils";

import { updateSomething } from "@js/actions/sample";
import sample from "@js/reducers/sample";
import { incrementEpic } from "@js/epics/sample";
import Button from "@material-ui/core/Button";

const SampleComponent = () => {
  return <div>Text</div>;
};

const Sample = connect()(SampleComponent);

export default createPlugin("Sample", {
  component: Sample,
  /*reducers: {
    sample,
  },
  epics: {
    incrementEpic,
  },*/
});
