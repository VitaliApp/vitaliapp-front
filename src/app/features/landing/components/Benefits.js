import React from "react";

export default function Benefits() {
  return (
    <React.Fragment>
      <section className="mt-40">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(/ilustrations/señor-parque.svg)",
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold font-josefin-regular">
                ¡Tu futuro saludable comienza aqui!
              </h1>
              <p className="mb-5 font-lato-regular text-lg">
                Regístrate ahora y descubre cómo pequeños cambios pueden marcar
                una gran diferencia en tu vida.
              </p>
              <button
                className="btn rounded-full bg-[#4D11AF]  text-[#ffff] hover:bg-[#4D11AF] hover:shadow-[#4D11AF] border-[#4D11AF] md:text-xs lg:text-lg"
                onClick={() => router.push("/auth/signin")}
              >
                ¡Registrate!
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
