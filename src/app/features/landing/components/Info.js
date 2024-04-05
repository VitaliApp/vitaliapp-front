import React from "react";
import Image from "next/image";

export default function Info() {
  return (
    <React.Fragment>
      <div className="divider"></div>
      <section className="">
        <div className="card lg:card-side px-24 flex">
          <figure>
            <Image
              width={450}
              height={450}
              src="/ilustrations/doctores-juntos.svg"
              alt="doctores"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-josefin-regular">
              ¿Qué es
              <span className="text-violetVitalli font-bolder">VitaliApp</span>?
            </h2>
            <p className="font-lato-regular">
              Bienvenido a VitaliApp,{" "}
              <span className="font-bold">
                tu compañero de confianza en el viaje hacia un bienestar óptimo
              </span>
              . En VitaliApp, nos dedicamos a empoderarte en tu búsqueda de{" "}
              <span className="font-bold">una vida más saludable y feliz</span>.
              Desde el momento en que te registras en nuestra aplicación, te
              convertimos en nuestra prioridad número uno.
            </p>
          </div>
        </div>
      </section>
      <div className="divider"></div>
    </React.Fragment>
  );
}
