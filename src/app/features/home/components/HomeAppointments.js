"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AddBtn from "./Add-button";
import { MdEditSquare, MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

import {
  deleteAppointmentAPI,
  getUserAppointmentsAPI,
} from "../api/userAppointments";
import formatDateToString from "@/app/helpers/formatDateToString";

import Link from "next/link";

export default function HomeAppointments() {
  const router = useRouter();
  const [appointment, setAppointment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAppointments = async () => {
      const res = await getUserAppointmentsAPI();
      setAppointment(res.appointments);
      setIsLoading(false);
      console.log("RES APPO", res.appointments);
    };

    getAppointments();
  }, []);

  const handleDelete = async (id) => {
    await deleteAppointmentAPI(id);
  };

  return (
    <React.Fragment>
      <div className="h-screen overflow-y-auto border border-gay-300 border-y-0 md:px-3">
        <div className="m-2 flex justify-between h-12 sm:space-x-2 md:mx-6">
          <h3 className="font-josefin-regular text-xl font-extrabold mt-2">
            Citas
          </h3>
          <label className="input input-bordered input-primary flex items-center md:w-80 h-6 mt-2 ">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          {/* <div className="pt-1 mx-1 text-gray-600">
            <input
              type="search"
              placeholder="Buscar"
              className="w-17 sm:w-60 lg:w-80 border-2 border-gray-300 bg-white h-8 rounded-full text-sm focus:outline-none"
            />
          </div> */}
          <div
            className="mt-1.5"
            onClick={() => router.push("/vitali/appointmentForm")}
          >
            <AddBtn />
          </div>
        </div>
        {/* STARTS PLACEHOLDER EMPTY MESSAGE */}

        {!appointment.length ? (
          <div className="mt-6 rounded flex flex-col items-center shadow p-1 bg-[#F9F9F9]">
            <Image
              alt="doctor"
              className="mt-4"
              src="/ilustrations/doctor.svg"
              width={300}
              height={300}
            />
            <p className="mb-1 mt-4 font-josefin-regular">
              Aun no tienes registros de citas
            </p>
            <button
              type="button"
              className="justify-center rounded m-3 bg-[#6851FF] px-6 pb-2 pt-2 text-sm font-medium text-white hover:bg-white hover:border hover:border-primary hover:text-primary"
            >
              <Link href="/vitali/appointmentForm">CREAR CITA</Link>
            </button>
          </div>
        ) : (
          appointment.slice(0, 10).map((appo, index) => (
            <div
              key={index}
              className="collapse rounded-none bg-white border border- border-t-0 border-l-0 border-r-0"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title hover:bg-red-100 flex items-center">
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

              <div className="collapse-content  font-lato-regular md:flex">
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
                      {" "}
                      {appo.doctors_name} - {appo.type_of_specilist}
                    </span>
                  </p>
                  <p className="font-bold">
                    Sintomas:
                    <span className="font-normal"> {appo.symptoms}</span>
                  </p>
                  <p className="font-bold">
                    Diagnostico:
                    <span className="font-normal"> {appo.diagnosis}</span>
                  </p>
                  <p className="font-bold">
                    Medicamento:
                    <span className="font-normal"> {appo.medicine}</span>
                  </p>
                  <p className="font-bold">
                    Ubicacion:
                    <span className="font-normal"> {appo.adress}</span>
                  </p>
                  <div className="mt-4 flex justify-end">
                    <button className="mr-2 hover:bg-violet-200">
                      <MdEditSquare style={{ color: "#4D11AF" }} />
                    </button>

                    <button
                      className="hover:bg-violet-200"
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
                          Deseas borrar el registro de esta
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
        )}
      </div>
    </React.Fragment>
  );
}
