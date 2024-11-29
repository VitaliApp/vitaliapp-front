"use client";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, getSession } from "next-auth/react";

export default function NavBar() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="shadow-lg shadow-violet-200 w-full bg-white fixed top-0 left-0 right-0 z-10">
      <div className="justify-between py-0 my-0 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between ml-4 py-1 md:py-3 md:block">
            {/* LOGO */}
            <button
              onClick={() => router.push("/vitali/home")}
              className="mt-0"
            >
              <Image src="/logo-lg.svg" width={80} height={30} alt="logo" />
            </button>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image
                    src="/icons/close-menu.svg"
                    width={30}
                    height={30}
                    alt="logo"
                    className="mr-4"
                  />
                ) : (
                  <Image
                    src="/icons/burger-btn.svg"
                    width={30}
                    height={30}
                    alt="logo"
                    className="focus:border-none active:border-none mr-4"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={` justify-self-center pb-3 mt-2 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-2 md:p-0 block ml-14 space-y-5" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center md:justify-center md:flex ">
              {/* NEXT BUTTON */}
              <li className=" font-lato-regular font-light text-lg mt-1 py-2 px-3 md:py-1 md:px-6 hover:text-violetVitalli ">
                <div className="flex justify-center">
                  <button onClick={() => router.push("/vitali/record")}>
                    Expediente
                  </button>
                </div>
              </li>
              {/* NEXT BUTTON */}
              <li className="font-lato-regular font-light hover:text-violetVitalli  text-lg mt-1 py-2 px-3 md:py-1 md:px-6 text-end ">
                <div className="flex justify-center">
                  <button onClick={() => router.push("/vitali/calendar")}>
                    Calendario de Hábitos
                  </button>
                </div>
              </li>
              {/* NEXT BUTTON */}
              <li className="font-lato-regular font-light hover:text-violetVitalli text-lg mt-1 py-2 md:py-1 px-3 text-end">
                <div className="flex justify-center">
                  <button onClick={() => router.push("/vitali/progress")}>
                    {" "}
                    Mi progreso{" "}
                  </button>
                </div>
              </li>
              {/* LAST BUTTON */}
              <li className="flex justify-center dropdown dropdown-end mt-4 md:mt-0 ml-2">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn w-8/9 md:btn-sm font-josefin-regular flex justify-between text-md border-b-2 md:border-b-0 border-primary text-white bg-primary md:rounded-md"
                >
                  ¡Hola {session?.user?.email}!
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 shadow bg-base-100 w-36 mt-4"
                >
                  <li>
                    <button onClick={() => signOut()} className="text-primary">
                      Cerrar Sesion
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
