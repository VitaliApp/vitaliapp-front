import React from "react";
import { useForm } from "react-hook-form";
import AddBtn from "../../home/components/Add-button";

export default function HydrationForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = handleSubmit(async (data) => {
    console.log("Vasos de agua", data);
    reset();
  });
  return (
    <React.Fragment>
      <form onSubmit={onsubmit}>
        <label htmlFor="date" className="font-ligth text-sm">
          Selecciona el dia
        </label>
        <input
          type="date"
          id="date"
          className="w-full bg-zinc-50 border-2 rounded-md px-2 py-0.5 mt-1  border-indigo-400 shadow-md"
          {...register("date", {
            required: "*Éste campo es obligatorio",
          })}
        />{" "}
        <label htmlFor="vasos" className="font-ligth text-sm">
          ¿Vasos de agua?
        </label>
        <input
          type="number"
          id="vasos"
          className="w-full bg-zinc-50 border-2 rounded-md px-2 py-0.5 mt-1  border-indigo-400 shadow-md"
          {...register("vasos", {
            required: "*Éste campo es obligatorio",
          })}
        />
        <div className="mt-1.5 text-end">
          <button type="submit">
            <AddBtn />
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
