"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getUserInfoAPI } from "../api/userProfile";
import Image from "next/image";
import formatDateToString from "@/app/helpers/formatDateToString";

export default function Profile() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await getUserInfoAPI();
      setUserInfo(res.data.user);
      setIsLoading(false);
    };

    getData();
  }, []);

  if (isLoading) {
    return (
      <React.Fragment>
        <p>Loading...</p>
        {/* <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div> */}
      </React.Fragment>
    );
  }

  const birthdate = formatDateToString(userInfo.birthdate);

  if (userInfo.name === undefined) {
    return (
      <React.Fragment>
        <div className="flex flex-col items-center">
          <Image
            className="m-2"
            src="/icons/perfil-vacio.svg"
            width={100}
            height={100}
            alt="profile placeholder"
          />
          <div className="border rounded m-2 bg-[#F9F9F9] py-4 px-2 ml-2 mr-2">
            <p className="font-lato-regular text-base">
              Aun no has completado tu perfil
            </p>
          </div>
          <div className="">
            <button
              onClick={() => router.push("/vitali/profileForm")}
              type="button"
              className="justify-center rounded m-3 bg-[#6851FF] px-6 pb-2 pt-2 text-xs font-medium text-white hover:bg-white hover:border hover:border-[#6851FF] hover:text-[#6851FF]"
            >
              Editar Perfil
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="mt-2 flex flex-col m-2 items-center hidden md:flex">
        {/* avatar con info */}
        <div className="avatar">
          <div className="w-20 rounded-full ring ring-[#6851FF] ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-lg font-extrabold">{`${userInfo.name} ${userInfo.lastName}`}</p>
          <div>
            <p className="text-md">Edad: {userInfo.age}</p>
            <p className="text-md">Sexo: {userInfo.gender}</p>
            <p className="text-md">Telefono: {userInfo.telephone}</p>
            <p className="text-md">Fecha de nacimiento: {birthdate}</p>
            <p className="text-md">Domicilio: {userInfo.adress}</p>
          </div>
        </div>

        <div className="mt-2">
          <button
            onClick={() => router.push("/vitali/profileForm")}
            type="button"
            className="justify-center rounded m-3 bg-[#6851FF] px-6 pb-2 pt-2 text-xs font-medium text-white hover:bg-white hover:border hover:border-[#6851FF] hover:text-[#6851FF]"
          >
            Editar Perfil
          </button>
        </div>
      </div>

      {/* profile mobile con info */}
      <div className="stats shadow flex justify-center md:hidden">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          <div className="stat-title font-extrabold text-[#000]">
            {userInfo.name} {userInfo.lastName}
          </div>
          <div className="stat-desc ">Edad: {userInfo.age}</div>
          <div className="stat-desc">Genero: {userInfo.gender}</div>
          <div className="stat-desc">Telefono: {userInfo.telephone}</div>
        </div>
      </div>
    </React.Fragment>
  );
}