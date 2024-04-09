"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AddBtn from "./Add-button";
import { MdEditSquare, MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
// import {
//   deleteAppointmentAPI,
//   getUserAppointmentsAPI,
// } from "../api/userAppointments";
// import formatDateToString from "@/app/helpers/formatDateToString";

import Link from "next/link";

export default function HomeAppointments() {
//   const router = useRouter();
//   const [appointment, setAppointment] = useState([]);
     const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const getAppointments = async () => {
//       const res = await getUserAppointmentsAPI();
//       setAppointment(res.appointments);
//       setIsLoading(false);
//       console.log("RES APPO", res.appointments);
//     };

//     getAppointments();
//   }, []);

//   const handleDelete = async (id) => {
//     await deleteAppointmentAPI(id);
//   };

  return (
    <React.Fragment>
      <div className="h-screen overflow-y-auto border border-gay-300 border-y-0 md:px-3">
        <div className="m-2 flex justify-between h-12 sm:space-x-2 md:mx-6">
          <h3 className="font-josefin-regular text-xl font-extrabold mt-2">
            Citas
          </h3>
          <div className="pt-1 mx-1 text-gray-600">
            <input
              type="search"
              placeholder="   Buscar"
              className="w-17 sm:w-60 lg:w-80 border-2 border-gray-300 bg-white h-8 rounded-full text-sm focus:outline-none"
            />
          </div>
          <div
            className="mt-1.5"
            onClick={() => router.push("/vitalli/newAppointment")}
          >
            <AddBtn />
          </div>
        </div>
          {/* STARTS PLACEHOLDER EMPTY MESSAGE */}
        <div className="mt-6 rounded flex flex-col items-center shadow p-1 bg-[#F9F9F9]">
            <Image
              src="/doctora-record.svg"
              width={200}
              height={200}
            />
            <p className="mb-1">Aun no tienes registros de citas</p>
            <button
              type="button"
              className="justify-center rounded m-3 bg-violet-800 px-6 pb-2 pt-2 text-sm font-medium text-white hover:bg-white hover:border hover:border-primary hover:text-primary"
            >
              <Link href="/vitalli/newAppointment">CREAR CITA</Link>
            </button>
          </div>
        {/* {!appointment.length ? (
          <div className="mt-6 rounded flex flex-col items-center shadow p-1 bg-[#F9F9F9]">
            <Image
              src="/ilustrations/doctora-record.svg"
              width={200}
              height={200}
            />
            <p className="mb-1">Aun no tienes registros de citas</p>
            <button
              type="button"
              className="justify-center rounded m-3 bg-primary px-6 pb-2 pt-2 text-sm font-medium text-white hover:bg-white hover:border hover:border-primary hover:text-primary"
            >
              <Link href="/vitalli/newAppointment">CREAR CITA</Link>
            </button>
          </div>
        ) : (
          appointment.slice(0, 10).map((appo, index) => (
            <div
              key={index}
              className="collapse rounded-none bg-white border border- border-t-0 border-l-0 border-r-0"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title flex items-center">
                <div className="mr-2">
                  <Image
                    src="../icons/lista.svg"
                    width={30}
                    height={30}
                    alt="calendar-icon"
                  />
                </div>
                <div className="ml-4 text-base font-lato-regular">
                  {appo?.label} - {formatDateToString(appo.date)}
                </div>
              </div>

              <div className="collapse-content font-lato-regular md:flex">
                <div>
                  <Image
                    alt="receta-img"
                    width={200}
                    height={150}
                    src="../ilustrations/big-landing.svg"
                  />
                </div>
                <div className="md:ml-8">
                  <p className="font-bold">
                    Costo: <span className="font-normal">${appo.cost}</span>
                  </p>
                  <p className="font-bold">
                    Doctor:
                    <span className="font-normal">
                      {" "} {appo.doctors_name} - {appo.type_of_specilist}
                    </span>
                  </p>
                  <p className="font-bold">
                    Sintomas:
                    <span className="font-normal">{" "} {appo.symptoms}</span>
                  </p>
                  <p className="font-bold">
                    Diagnostico:
                    <span className="font-normal">{" "} {appo.diagnosis}</span>
                  </p>
                  <p className="font-bold">
                    Medicamento:
                    <span className="font-normal">{" "} {appo.medicine}</span>
                  </p>
                  <p className="font-bold">
                    Ubicacion:
                    <span className="font-normal">{" "} {appo.adress}</span>
                  </p>
                  <p className="font-bold">
                    Observaciones:
                    <span className="font-normal">Salir a caminar</span>
                  </p>
                  <div className=" mt-4">
                    <button className="mr-2 hover:bg-indigo-100">
                      <MdEditSquare style={{ color: "#4D11AF" }} />
                    </button>

                    <button
                      className="hover:bg-indigo-100"
                      onClick={() =>
                        document.getElementById("deleteAppo").showModal()
                      }
                    >
                      <MdDelete style={{ color: "#4D11AF" }} />
                    </button>
                    <dialog
                      id="deleteAppo"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Hey!</h3>
                        <p className="py-4">
                          Estas seguro de querer borrar el registro de esta
                          consulta?
                        </p>
                        <div className="modal-action">
                          <form method="dialog">
                            <button
                              onClick={() => handleDelete(appo._id)}
                              className="btn btn-error mr-2"
                            >
                              Eliminar
                            </button>
                            <button className="btn">Cancelar</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
          ))
        )} */}
      </div>
    </React.Fragment>
  );
}