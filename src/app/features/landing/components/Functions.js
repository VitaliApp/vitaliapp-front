import React from "react";
import Image from "next/image";

export default function Functions() {
  return (
    <React.Fragment>
      <section className="mt-36">
        <div className="card lg:card-side px-24 flex">
          <div className="card-body">
            <h2 className="card-title font-josefin-regular">
              ¡Tu bienestar es nuestra prioridad!
            </h2>
            <p className="font-lato-regular">
              Acceder a tu propio historial médico te permite tomar decisiones
              informadas sobre tu salud, comprender mejor tus condiciones
              médicas y participar activamente en tu atención médica; es
              esencial para garantizar una atención médica de calidad, la
              prevención de enfermedades y tu seguridad.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
