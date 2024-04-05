"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function ButtonLogin() {
  const router = useRouter();
  return (
    <React.Fragment>
      <div className="min-w-80 text-center mt-8 md:mt-8 md:w-96 lg:mt-16 lg:text-start lg:ml-8 xl:mt-6">
        <button
          className="btn rounded-full border-[#4D11AF] bg-[#ffff] text-[#4D11AF] mr-2 hover:border-[#4D11AF] hover:bg-[#ffff] hover:shadow-[#4D11AF] lg:text-lg"
          onClick={() => router.push("/auth/login")}
        >
          Inicia Sesion
        </button>
        <button
          className="btn rounded-full bg-[#4D11AF] rder-[#4D11AF] text-[#ffff] hover:bg-[#4D11AF] hover:shadow-[#4D11AF] hover:border-[#4D11AF] lg:text-lg"
          onClick={() => router.push("/auth/signin")}
        >
          ¡Registrate!
        </button>
      </div>
    </React.Fragment>
  );
}
