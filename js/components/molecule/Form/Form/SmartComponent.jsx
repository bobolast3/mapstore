import React from "react";
import Form from "./DumbComponent";
import { useForm, useWatch } from "react-hook-form";

const SmartComponent = ({ fieldData, buttonLabel }) => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const submitHandler = () => {};

  return (
    <Form
      fieldData={fieldData}
      handleSubmit={handleSubmit}
      submitHandler={submitHandler}
      control={control}
      buttonLabel={buttonLabel}
      setValue={setValue}
    />
  );
};

export default SmartComponent;
