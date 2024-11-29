"use client";
import FormSignin from "../components/Form-signin";
import Image from "next/image";

export default function Signin() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <FormSignin />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-100">
        <Image
          alt="hero logo"
          src="/ilustrations/doctores-juntos.svg"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
