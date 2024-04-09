"use client";
import React, { useState } from "react";
import Image from "next/image";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";

export default function ProfileForm() {
  const router = useRouter();
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { selectedSex, setSelectedSex } = useState(null);

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }
  //   console.log(session, "session user");

  const onSubmitUserUpdated = handleSubmit(async (data) => {
    console.log(data, "dataaa");
    const res = await updatedUserProfileAPI(data);
    console.log(res, "res");
    if (res) {
      console.log("TODO OK");
      // router.push('/vitalli/home')
      // reset();
    } else {
      console.log("ERROR EN ACTUAIZAR");
    }
  });

  return (
    <div className="flex min-h-screen lg:w-full flex-col items-center justify-between">
      <form
        onSubmit={onSubmitUserUpdated}
        className="md:w-1/2 flex flex-col w-80 border-2 rounded-lg mt-20 mb-6 pt-4 items-center bg-white shadow-xl shadow-violet-600"
      >
        <div className="mb-2">
          <h1 className="font-josefin-regular text-xl">Completa tu Perfil</h1>
        </div>
        <div className="flex flex-col m-1 w-4/5 md:w-2/3">
          <div className="flex flex-col items-center mb-4">
            <div className="flex justify-center">
              <Image
                className="m-2"
                src="/icons/perfil-vacio.svg"
                width={80}
                height={80}
                alt="profile placeholder"
              />
            </div>
            <input
              type="file"
              id="picture"
              accept="image/*"
              {...register("picture")}
              className="file-input file-input-bordered file-input-xs file-input-primary text-xs w-2/5 "
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="input"
              className="block mb-2 text-sm font-medium text-primary"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="block p-1 input-xs md:input-sm md:w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"
            />
          </div>
          <div className="mb-2 ">
            <label
              htmlFor="input"
              className="block mb-2 text-sm font-medium text-primary"
            >
              Apellido
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName")}
              className="block p-1 input-xs md:input-sm md:w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"
            />
          </div>
          <div className="mb-2 flex flex-col md:flex-row space-y-2 md:space-y-0">
            <div className="md:w-1/2">
              <label
                htmlFor="input"
                className="block mb-2 text-sm font-medium text-primary"
              >
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                id="birthdate"
                {...register("birthdate")}
                className="block p-1 input-xs md:input-sm md:w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"
              />
            </div>
            <div className="dropdown dropdown-bottom md:ml-2 md:w-1/2">
              <label
                htmlFor="dropdown"
                className="flex md:justify-center text-sm font-medium text-primary my-1"
              >
                Sexo Biologico
              </label>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-sm md:w-full text-gray-500"
              >
                Selecciona tu sexo
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box"
              >
                <li>
                  <label className="label cursor-pointer">
                    <span className="label-text">Hombre</span>
                    <input
                      type="radio"
                      value="Hombre"
                      {...register("gender")}
                      className="radio radio-primary"
                      checked
                    />
                  </label>
                </li>
                <li>
                  <label className="label cursor-pointer">
                    <span className="label-text">Mujer</span>
                    <input
                      type="radio"
                      value="Mujer"
                      {...register("gender")}
                      className="radio radio-primary"
                      checked
                    />
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-2">
            <label
              htmlFor="input"
              className="block mb-2 text-sm font-medium text-primary"
            >
              Telefono
            </label>
            <input
              type="text"
              id="telephone"
              {...register("telephone")}
              className="block p-1 input-xs md:input-sm md:w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="input"
              className="block mb-2 text-sm font-medium text-primary"
            >
              Domicilio
            </label>
            <input
              type="text"
              id="adress"
              {...register("adress")}
              className="block p-1 input-xs md:input-sm md:w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"
            />
          </div>
        </div>
        <div className="m-6">
          <button
            id="saveButton"
            type="submit"
            className="rounded py-1 px-8 bg-primary text-white "
          >
            GUARDAR
          </button>
        </div>
      </form>
    </div>
  );
}