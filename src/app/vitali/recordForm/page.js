"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AllergyForm from "@/app/features/record-form/components/AllergyForm";
import MedicineForm from "@/app/features/record-form/components/MedicineForm";
import BloodForm from "@/app/features/record-form/components/BloodGroupForm";
import FamilyForm from "@/app/features/record-form/components/Familyform";
import ContactForm from "@/app/features/record-form/components/ContactForm";
import ChronicForm from "@/app/features/record-form/components/ChronicForm";

export default function RecordForm() {
  const {
    register,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  return (
    <div
      id="recordForm"
      className="flex flex-col items-center min-h-screen section relative pt-16 md:pt-16 md:pb-0 bg-white"
    >
      <div className="container flex flex-col items-center mt-2 md:mb-22 lg:max-w-6xl mx-auto lg:px-8">
        <div className="flex items-center justify-center md:flex lg:my-4 my-2">
          <h2 className="text-xl font-josefin-regular text-bold">Expediente</h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-wrap items-center flex-row m-1 lg:mx-16 text-center">
            {/* START block */}

            <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-white">
              <AllergyForm />
            </div>
            {/* END block */}

            <div className="flex-shrink sm:w-1/2 lg:w-1/3 md lg:px-1 ">
              <MedicineForm />
            </div>
            {/* END block */}

            <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-white">
              <ChronicForm />
            </div>
            {/* END block */}

            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-white">
              <BloodForm />
            </div>
            {/* END block */}

            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-white">
              <FamilyForm />
            </div>
            {/* END block */}

            <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 bg-white">
              <ContactForm />
              {/* <div className="py-3 px-1 h-32 lg:h-44 lg:px-4 bg-white shadow-md shadow-violet-400 rounded mb-2 mx-0.5">
                        <div className="flex flex-row justify-between mb-2 lg:my-2">
                            <h3 className="text-md lg:text-lg font-josefin-regular text-black">Contacto de Emergencia</h3>
                            <div className="mr-1">
                                <AddBtn />
                            </div>
                        </div>
                        <input type="text" placeholder="Padre - 1234567" {...register("contact")}
                        className="mt-2 input input-xs lg:input-sm input-bordered input-primary w-full max-w-xs" />
                    </div> */}
            </div>
          </div>
          {/* end block */}
          <div className="flex w-66 bg-white items-center mt-2 mb-6 md:mt-6">
            <button onClick={()=>router.push('/vitalli/record')}
            className="btn btn-wide btn-primary text-md md:text-lg hover:bg-white hover:border-primary hover:text-primary">
              Finalizar Editar
            </button>
          </div>
        </div>
        {/* end row */}
      </div>
    </div>
  );
}

{
  /* <div className="py-3 px-1 h-32 lg:h-44 lg:pr-2 lg:pl-4 shadow-md shadow-violet-400 rounded mb-2 mx-0.5 bg-white">
                    <div className="flex flex-row mb-2 lg:my-2">
                        <h3 className="ml-2 text-md lg:text-lg font-josefin-regular text-black">Grupo Sanguineo</h3>
                    </div>
                    <div className="flex flex-col m-3">
                        <div className="flex flex-row mb-2.5 lg:my-3 space-x-6 my-1 lg:my-2">
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="A+" name="bloodType"
                            
                            {...register("bloodGroup")}
                            />
                            <span className="ml-1 text-sm">A+</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="A-" name="bloodType"
                            
                            {...register("bloodGroup")}
                            />
                            <span className="ml-1 text-sm">A-</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="B+" name="bloodType"
                            
                            {...register("bloodGroup")}
                            />
                            <span className="ml-1 text-sm">B+</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="B-" name="bloodType"
                            
                            {...register("bloodGroup")}
                            />
                            <span className="ml-1 text-sm">B-</span>
                        </label>
                        </div>
                        <div className="flex flex-row space-x-4 my-1 lg:my-2">
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="AB+" name="bloodType"
                            
                            {...register("bloodGroup")}
                            />
                            <span className="ml-1 text-sm">AB+</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="AB-" name="bloodType"
                            
                            {...register("bloodGroup")}
                            />
                            <span className="ml-1 text-sm">AB-</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="O+" name="bloodType"
                            
                            {...register("bloodGroup")}
                            />
                            <span className="ml-1 mr-1 text-sm">O+</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input className="radio radio-sm radio-primary"
                            type="radio" value="O-" name="bloodType"
                            
                            {...register("bloodGroup")}
                            />
                            <span className="ml-1 text-sm">O-</span>
                        </label>
                        </div>
                    </div>
                </div> */
}