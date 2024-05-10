import React from "react";
import { useForm } from "react-hook-form";
import { InputNumber, Space } from "antd";

export default function FeedingForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onChange = (value) => {
    console.log("changed", value);
  };
  return (
    //TODO CREAR EL FORMULARIO DE ALIMENTACION
    <React.Fragment>
      <form>
        <InputNumber
          min={1}
          max={100000}
          defaultValue={3}
          onChange={onChange}
        />
      </form>
    </React.Fragment>
  );
}
