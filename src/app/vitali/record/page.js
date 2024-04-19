"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Allergies from "@/app/features/record-view/components/allergies";
import Medicine from "@/app/features/record-view/components/medicine";
import ChronicDesease from "@/app/features/record-view/components/chronicDesease";
import ContactEmergency from "@/app/features/record-view/components/contactEmergency";
import FamilyHistoryRedord from "@/app/features/record-view/components/familyHistory";
import BloodGroup from "@/app/features/record-view/components/bloodGroup";

export default function Expediente() {
  const router = useRouter();

  return (
    <div
      id="recordForm"
      className="flex flex-col min-h-screen relative pt-16 md:pt-16 md:pb-0 "
    >
      <div className="container flex flex-col items-center mt-2 lg:max-w-6xl mx-auto lg:px-8">
        <div className="flex items-center justify-center md:flex lg:my-4 my-2">
          <h2 className="text-xl font-josefin-regular text-bold">Expediente</h2>
          <div className="ml-4"></div>
        </div>

        <div className="flex flex-wrap flex-row m-1 lg:mx-16 text-center rounded-lg bg-transparent">
          {/* START block */}
          <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 md lg:px-1 ">
            <div className="py-3 px-1 h-32 mb-2 mx-0.5 lg:h-44 lg:pr-2 lg:pl-4 bg-white rounded-lg shadow-md shadow-violet-400 ">
              <div className="flex flex-row justify-center mb-2 lg:my-2 border-2 border-gray-300 border-x-0 border-t-0">
                <h3 className="ml-2 text-md lg:text-lg font-josefin-regular text-black">
                  Grupo Sanguineo
                </h3>
              </div>
              <BloodGroup />
            </div>
          </div>
          {/* END block */}
          <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1  ">
            <div className="py-3 px-1 h-32 mb-2 mx-0.5 lg:h-44 lg:px-2 bg-white rounded-lg shadow-md shadow-violet-400">
              <div className="justify-center flex flex-row mb-2 lg:my-2 border-2 border-gray-300 border-x-0 border-t-0">
                <h3 className="text-md lg:text-lg font-josefin-regular text-black">
                  Alergias
                </h3>
              </div>
              <Allergies />
            </div>
          </div>
          {/* END block */}
          <div className="flex-shrink px-1 w-full sm:w-1/2 lg:w-1/3 lg:px-1 ">
            <div className="py-3 px-1 h-32 mb-2 mx-0.5 lg:h-44 lg:px-2 bg-whiterounded-lg rounded shadow-md shadow-violet-400">
              <div className="flex flex-row justify-center mb-2 lg:my-2 border-2 border-gray-300 border-x-0 border-t-0">
                <h3 className="text-md lg:text-lg font-josefin-regular text-black">
                  Enfermedades Cronicas
                </h3>
              </div>
              <ChronicDesease />
            </div>
          </div>
          {/* END block */}
          <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 ">
            <div className="py-3 px-1 h-32 mb-2 mx-0.5 lg:h-44 lg:px-2 bg-white rounded-lg shadow-md shadow-violet-400">
              <div className="flex flex-row justify-center mb-2 lg:my-2 border-2 border-gray-300 border-x-0 border-t-0">
                <h3 className="ml-2 text-md lg:text-lg font-josefin-regular text-black">
                  Medicamento Controlado
                </h3>
              </div>
              <Medicine />
            </div>
          </div>
          {/* END block */}
          <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 ">
            <div className="py-3 px-1 h-32 mb-2 mx-0.5 lg:h-44 lg:px-4 rounded-lg bg-white shadow-md shadow-violet-400">
              <div className="flex flex-row justify-center mb-2 lg:my-2 border-2 border-gray-300 border-x-0 border-t-0">
                <h3 className="text-md lg:text-lg font-josefin-regular text-black">
                  Antecedentes Familiares
                </h3>
              </div>
              <FamilyHistoryRedord />
            </div>
          </div>

          <div className="flex-shrink w-full sm:w-1/2 lg:w-1/3 lg:px-1 ">
            <div className="py-3 px-1 h-32 mb-2 mx-0.5 lg:h-44 lg:px-4 rounded-lg bg-white shadow-md shadow-violet-400">
              <div className="flex flex-row justify-center mb-2 lg:my-2 border-2 border-gray-300 border-x-0 border-t-0">
                <h3 className="text-md lg:text-lg font-josefin-regular text-black">
                  Contacto de Emergencia
                </h3>
              </div>
              <ContactEmergency />
            </div>
          </div>
          {/* END block */}
        </div>

        <div className="flex w-66 bg-white items-center mt-2 mb-6 md:mt-6">
          <button
            className="btn btn-wide btn-primary text-md md:text-lg hover:bg-white hover:border-primary hover:text-primary"
            type="button"
            onClick={() => router.push("/vitali/recordForm")}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}