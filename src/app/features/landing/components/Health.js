import React from "react";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";

export default function Health() {
  return (
    <React.Fragment>
      <section id="benefits" className="mt-36">
        <Slide damping={0.1} direction="right">
        <div className="card lg:card-side px-24 flex">
          <div className="card-body">
            <h2 className="card-title font-josefin-regular">
              Calendario de habitos saludables
            </h2>
            <p className="font-lato-regular">
              Optimiza tu bienestar con nuestro calendario de hábitos. Registra
              tus momentos de descanso y tus sesiones de ejercicio para mantener
              un equilibrio perfecto entre cuerpo y mente, ¡todo en un solo
              lugar!
            </p>
          </div>
          <figure>
            <Image
              width={450}
              height={450}
              src="/ilustrations/calendar.svg"
              alt="calendar"
            />
          </figure>
        </div>
        </Slide>
        
        <Slide damping={0.1}>
        <div className="card lg:card-side px-24 flex mt-40">
          <figure>
            <Image
              width={450}
              height={450}
              src="/ilustrations/chart.svg"
              alt="chart"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-josefin-regular">
              Promedio diario
            </h2>
            <p className="font-lato-regular">
              Con nuestra herramienta de promedio diario, te ofrecemos una
              visión clara y concisa de tus hábitos. ¡Sigue tu progreso
              fácilmente con nuestra barra de promedio diario y alcanza tus
              objetivos de salud de manera efectiva!
            </p>
          </div>
        </div>
        </Slide>
        
      </section>
    </React.Fragment>
  );
}
