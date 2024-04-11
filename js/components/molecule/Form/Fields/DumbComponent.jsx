import React from "react";
import TextFieldMolecule from "../Textfield/Controlled/DumbComponent";
import { Grid } from "@material-ui/core";
import GridContainer from "../../GridContainer/DumbComponent";

const DumbComponent = ({ fieldArray, title, control }) => {
  return (
    <>
      {title && <h3>{title}</h3>}
      <GridContainer>
        {fieldArray.map((field, index) => (
          <Grid key={index} item md={field.length}>
            <TextFieldMolecule fieldInfo={field} control={control} />
          </Grid>
        ))}
      </GridContainer>
    </>
  );
};

export default DumbComponent;
