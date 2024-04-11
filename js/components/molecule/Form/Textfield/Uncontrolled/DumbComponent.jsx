import { TextField } from "@material-ui/core";
import React, { useState } from "react";

const TextFieldMolecule = ({ select, options, ...props }) => {
  return !select ? (
    <TextField fullWidth {...props} variant="standard" color="secondary" />
  ) : (
    <TextField
      style={{
        minWidth: "15rem",
      }}
      {...props}
      select
      fullWidth
      variant="standard"
      color="secondary"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
  );
};

export default TextFieldMolecule;
