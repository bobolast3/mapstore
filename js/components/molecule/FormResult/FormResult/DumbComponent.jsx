import React from "react";
import FormResultItem from "../FormResultItem/DumbComponent";
import GridContainer from "../../GridContainer/DumbComponent";
import { Grid } from "@material-ui/core";

const DumbComponent = ({ data }) => {
  return (
    <div className="form-result">
      {data.map((resultSection) => (
        <>
          {resultSection.title && <h3>{resultSection.title}</h3>}
          <GridContainer>
            {resultSection.results.map((result, index) => (
              <Grid key={index} item md={result.length}>
                <FormResultItem key={index} item={result} />
              </Grid>
            ))}
          </GridContainer>
        </>
      ))}
    </div>
  );
};

export default DumbComponent;
