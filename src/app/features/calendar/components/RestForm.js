import React from "react";
import { useForm } from "react-hook-form";
import AddBtn from "../../home/components/Add-button";

export default function RestForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = handleSubmit(async (data) => {
    console.log("Tiempo de descanso", data);
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
        <label htmlFor="hrs" className="font-ligth text-sm">
          ¿Horas de sueño?
        </label>
        <input
          type="number"
          id="hrs"
          className="w-full bg-zinc-50 border-2 rounded-md px-2 py-0.5 mt-1  border-indigo-400 shadow-md"
          {...register("hrs", {
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
