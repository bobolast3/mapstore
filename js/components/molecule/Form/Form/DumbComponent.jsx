import React from "react";
import TextFieldMolecule from "../Textfield/Controlled/DumbComponent";
import { Grid } from "@material-ui/core";
import Fields from "../Fields/DumbComponent";

const DumbComponent = ({
  fieldData,
  handleSubmit,
  submitHandler,
  control,
  buttonLabel,
  setValue,
}) => {
  return (
    <form className="form" onSubmit={handleSubmit(submitHandler)}>
      {fieldData.map((fields) => (
        <Fields
          key={fields.title}
          fieldArray={fields.inputs}
          title={fields.title}
          fieldLength={6}
          control={control}
        />
      ))}
      <div className="form__buttons">
        <button className="custom-button">{buttonLabel}</button>
        <button className=" custom-button custom-button--red">Clear</button>
      </div>
    </form>
  );
};

export default DumbComponent;
