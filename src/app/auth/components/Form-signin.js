"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { userRegisterAPI } from "../api/register";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function FormSignin() {
  const router = useRouter();
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmitRegister = handleSubmit(async (data) => {
    const result = await userRegisterAPI(data);
    console.log('RESULT',result.msg)
    if (result.msg === "user created") {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (res.ok) {
        console.log(res, "res register form, GOOD");
        router.push("/vitali/home");
        reset();
      } else {
        console.log(res.error, "errorrrrrrrr");
      }
    }
  });

  return (
    <>
    <div className="flex flex-col">
    <form
      onSubmit={onSubmitRegister}
      className="bg-red mb-4 rounded-3xl border-gray-100"
    >
      <h1 className="text-5xl font-semibold font-josefin-regular">
        ¡Bienvenido a <span className="text-violetVitalli">VitaliApp</span>!
      </h1>
      <p className="font-lato-regular text-lg text-gray-500 mt-4">
        Tu salud, tu control, tu camino; regístrate.
      </p>

      <div className="mt-8">
        <div>
          <label htmlFor="signin-email" className="text-lg font-lato-regular">
            Correo electrónico
          </label>
          <input
            id="signin-email"
            type="email"
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Ingresa tu correo electrónico"
            {...register("email", {
              required: "*Éste campo es obligatorio",
            })} />
          <p className="text-[12px] text-red-600">{errors.email?.message}</p>
        </div>
        <div>
          <label
            htmlFor="signin-password"
            className="text-lg font-lato-regular"
          >
            Contraseña
          </label>
          <input
            id="signin-password"
            type="password"
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Crea tu contraseña"
            {...register("password", {
              required: "Éste campo es obligatorio",
              pattern: {
                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                message: "Includes lowercase, uppercase, special character%, minimum 8 characters",
              },
            })} />
          <p className="text-[12px] text-red-600">{errors.password?.message}</p>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-y-4">
      <button
          type="submit"
          className="active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-3 rounded-xl bg-violetVitalli text-white text-xl font-lato-regular"
        >
          ¡Regístrarme!
        </button>
      </div>
    </form><div className="mt-2 flex flex-col gap-y-4">
        
        <button 
        onClick={()=> signIn('google')}
        className="flex roundend-xl py-3 border-2 border-gray-100 items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fbc02d"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#e53935"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4caf50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1565c0"
              d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          Regístrate con Google
        </button>
      </div><p className="font-lato-regular text-lg text-[#000] mt-8 text-center">
        ¿Ya tienes una cuenta?
        <span className="text-[#4D11AF] ml-2 font-extrabold underline underline-offset-1">
          <Link href="/auth/login">Inicia Sesion</Link>
        </span>
      </p>
    </div>
    
      </>
  );
}
