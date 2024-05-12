"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createAppoAPI } from "@/app/features/home/api/userAppointments";

export default function AppointmentForm() {

    const router = useRouter();
    const {
      reset,
      handleSubmit,
      register,
      formState: { errors },
    } = useForm();

    const onSubmitAppoCreate = handleSubmit(async (data) => {
        console.log(data, "dataaa");
        const res = await createAppoAPI(data);
        console.log(res, "res");
        if (!res) {
          console.log("ERROR EN ACTUAIZAR");
        } else {
          console.log("TODO OK");
          reset();
          router.push('/vitali/home')
        }
      });

    return(
        <div className="flex min-h-screen lg:w-full flex-col items-center justify-between mt-8 mb-24">
            <form onSubmit={onSubmitAppoCreate} className="md:w-1/3 flex flex-col w-80 border-2 rounded pt-6 items-center mt-20 bg-white">
                <div className="mb-4">
                    <h1 className="font-josefin-regular text-xl">
                        Nueva Cita
                    </h1>
                </div>
                <div>
                    <div className="mb-2">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-primary">Etiqueta</label>
                        <input type="text"
                         {...register("label", { required: "*Éste campo es obligatorio" })}
                        id="label" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                        <p className="text-[12px] text-red-600">{errors.label?.message}</p>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-primary">Fecha</label>
                        <input type="date" 
                         {...register("date", { required: "*Éste campo es obligatorio" })}
                        id="date" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                        <p className="text-[12px] text-red-600">{errors.date?.message}</p>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-primary">Nombre del Medico</label>
                        <input type="text" 
                         {...register("doctors_name", { required: "*Éste campo es obligatorio" })}
                        id="doctors_name" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                        <p className="text-[12px] text-red-600">{errors.doctors_name?.message}</p>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-primary">Tipo de especialista</label>
                        <input type="text" 
                         {...register("type_of_specilist", { required: "*Éste campo es obligatorio" })}
                        id="type_of_specilist" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                        <p className="text-[12px] text-red-600">{errors.type_of_specilist?.message}</p>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-primary">Sintomas</label>
                        <input type="text" 
                         {...register("symptoms", { required: "*Éste campo es obligatorio" })}
                        id="symptoms" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                        <p className="text-[12px] text-red-600">{errors.symptoms?.message}</p>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-primary">Medicina</label>
                        <input type="text" 
                         {...register("medicine", { required: "*Éste campo es obligatorio" })}
                        id="medicine" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                        <p className="text-[12px] text-red-600">{errors.medicine?.message}</p>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-primary">Direccion</label>
                        <input type="text" 
                         {...register("adress", { required: "*Éste campo es obligatorio" })}
                        id="adress" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                        <p className="text-[12px] text-red-600">{errors.adress?.message}</p>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-primary">Diagnostico</label>
                        <textarea type="text"
                         {...register("diagnosis", { required: "*Éste campo es obligatorio" })}
                        id="diagnosis" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                        <p className="text-[12px] text-red-600">{errors.diagnosis?.message}</p>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-primary">Costo</label>
                        <input type="number" 
                         {...register("cost", { required: "*Éste campo es obligatorio" })}
                        id="cost" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                        <p className="text-[12px] text-red-600">{errors.cost?.message}</p>
                    </div>
                </div>    
                {/* <div className="flex flex-row p-2 mt-2">
                    <button
                    type="button"
                    className="m-2 border border-primary rounded text-xs btn-s sm:btn-sm md:btn-md hover:bg-primary-500 hover:bg-opacity-10 hover:text-primary-600"
                    >
                        Añadir evidencia
                    </button>
                    <button
                    type="button"
                    className="m-2 border border-primary rounded text-xs btn-s sm:btn-sm md:btn-md"
                    >
                        Añadir recordatorio
                    </button>
                </div> */}
                <div className="mb-4">
                    <button id="formSave" type="submit" 
                    className="rounded py-1 px-8 bg-primary text-white ">
                        GUARDAR
                    </button>
                </div>
            </form>
        </div>
    )
}