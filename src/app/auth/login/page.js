"use client";
import FormLogin from "@/app/auth/components/Form-login.js";

export default function Login() {
  return (
    <div className="flex w-full h-screen justify-center">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <FormLogin />
      </div>
    </div>
  );
}
