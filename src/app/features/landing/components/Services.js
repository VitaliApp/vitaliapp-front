import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <React.Fragment>
      <section id="services" className="text-center mt-32 mb-36">
        <div className="flex justify-center  text-xl lg:text-3xl mb-11">
          <h2 className="font-josefin-regular font-bold text-[#704FAA]">
            Nuestros servicios
          </h2>
        </div>
        <div className=" md:flex md:justify-evenly mt-6">

          <div className="card card-compact w-96 bg-base-100 shadow-xl mt-8 ml-4 hover:drop-shadow-2xl">
            <figure>
              <Image
                src="/ilustrations/doctor.svg"
                width={400}
                height={400}
                alt="doctor"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-lato-regular justify-center">
                Historial Medico
              </h2>
              <p className="font-lato-regular">
                Con nuestra función de registro de historial médico, puedes
                mantener toda tu información médica crucial al alcance de tu
                mano. Desde diagnósticos previos hasta medicamentos recetados y
                alergias.
              </p>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl mt-8 ml-4 hover:drop-shadow-2xl">
            <figure>
              <Image
                src="/ilustrations/health.svg"
                width={300}
                height={300}
                alt="health"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-lato-regular justify-center">
                Habitos saludables
              </h2>
              <p className="font-lato-regular">
                Nos esforzamos por brindarte las herramientas y recursos
                necesarios para que tomes el control de tu salud, ya sea que
                estés buscando perder peso, mejorar tu condición física o
                simplemente adoptar hábitos más saludables.
              </p>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl mt-8 ml-4 hover:drop-shadow-2xl">
            <figure>
              <Image
                src="/ilustrations/enfermera-morado.svg"
                width={300}
                height={300}
                alt="enfermera"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-lato-regular justify-center">
                Bienestar
              </h2>
              <p className="font-lato-regular">
                En VitaliApp, creemos en la importancia de la personalización.
                Entendemos que cada individuo es único, por lo que ofrecemos un
                enfoque personalizado para ayudarte a alcanzar tus objetivos de
                salud.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="divider"></div>
    </React.Fragment>
  );
}
