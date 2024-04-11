import React from "react";
import { Controller } from "react-hook-form";
import TextFieldMolecule from "../Uncontrolled/DumbComponent";

const DumbComponent = ({ control, fieldInfo }) => {
  return (
    <Controller
      name={fieldInfo.name}
      control={control}
      defaultValue={fieldInfo.default}
      rules={fieldInfo.rules}
      render={({ field }) => (
        <TextFieldMolecule
          {...fieldInfo}
          {...field}
          inputProps={{ style: { color: "white" } }}
          options={fieldInfo.options}
          value={field.value ? field.value : ""}
        />
      )}
    ></Controller>
  );
};

export default DumbComponent;
