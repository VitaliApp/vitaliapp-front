import React from "react";
import { useForm } from "react-hook-form";
import AddBtn from "../../home/components/Add-button";

export default function ExerciseForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = handleSubmit(async (data) => {
    console.log("Tiempo de ejerciciio", data);
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
        <label htmlFor="time" className="font-ligth text-sm">
          ¿Tiempo?
        </label>
        <input
          type="number"
          id="time"
          className="w-full bg-zinc-50 border-2 rounded-md px-2 py-0.5 mt-1  border-indigo-400 shadow-md mb-4"
          {...register("time", {
            required: "*Éste campo es obligatorio",
          })}
        />
        <label htmlFor="typetime" className="font-ligth text-sm mr-4">
          <input
            type="radio"
            name="typetime"
            value="hrs"
            {...register("typetime", {
              required: "*Éste campo es obligatorio",
            })}
          />
          Hrs
        </label>
        <label htmlFor="typetime" className="font-ligth text-sm">
          <input
            type="radio"
            name="typetime"
            value="min"
            defaultChecked={true}
            {...register("typetime", {
              required: "*Éste campo es obligatorio",
            })}
          />
          Min
        </label>
        <div className="mt-1.5 text-end">
          <button type="submit">
            <AddBtn />
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
