import React from "react";
import { Grid } from "@material-ui/core";

const DumbComponent = ({ children }) => {
  return (
    <Grid container spacing={6}>
      {children}
    </Grid>
  );
};

export default DumbComponent;
