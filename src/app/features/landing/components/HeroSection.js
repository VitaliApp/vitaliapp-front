import React from "react";
import Image from "next/image";
import ButtonLogin from "./Button-Login";

export default function HeroSection() {
  return (
    <React.Fragment>
      <div className="hero mt-20 md:mt-20 lg:mt-12 bg-base-100 mb-32">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex justify-center pt-2 mt-6 lg:mt-24 lg:mr-2">
            <Image
              className=" lg:w-full rounded-lg shadow-2xl"
              alt="hero logo"
              src="/ilustrations/estetoscopio.svg"
              width={300}
              height={300}
            />
          </div>
          <div>
            <div className="title-hero">
              <div className="font-josefin-regular text-2xl font-extrabold flex justify-center px-8 md:text-4xl md:justify-center lg:text-6xl lg:justify-start xl:text-6xl">
                <p className="">Descubre</p>
                <p className="text-violetVitalli pl-2">VitaliApp</p>
              </div>
              <div className="text-center px-8 font-medium font-lato-regular md:text-2xl md:text-center md:w-96 md:mt-2 lg:text-left lg:text-4xl lg:w-9/12 lg:tracking-wide xl:text-4xl">
                <span className="">
                  ¡Tu compañero integral para el bienestar y la salud!
                </span>
              </div>
            </div>
            <ButtonLogin/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
