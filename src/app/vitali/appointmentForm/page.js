import React from "react";

export default function AppointmentForm() {
    return(
        <div className="flex min-h-screen lg:w-full flex-col items-center justify-between">
            <form className="md:w-1/3 flex flex-col w-80 border-2 rounded pt-6 items-center mt-20 bg-white">
                <div className="mb-4">
                    <h1 className="font-josefin-regular text-xl">
                        Nueva Cita
                    </h1>
                </div>
                <div>
                    <div className="mb-2">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-primary">Titulo</label>
                        <input type="text" id="title" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-primary">Fecha</label>
                        <input type="date" id="date" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-primary">Medico</label>
                        <input type="text" id="doctor" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-primary">Direccion</label>
                        <input type="text" id="adress" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-primary">Comentarios</label>
                        <textarea type="text" id="comments" className="block p-1 md:px-8 md:w-1/1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"/>
                    </div>
                </div>    
                <div className="flex flex-row p-2 mt-2">
                    <button
                    type="button"
                    className="m-2 border border-primary rounded text-xs btn-s sm:btn-sm md:btn-md hover:bg-primary-500 hover:bg-opacity-10 hover:text-primary-600"
                    >
                        Añadir evidencia
                    </button>
                    <button
                    type="button"
                    className="m-2 border border-primary rounded text-xs btn-s sm:btn-sm md:btn-md"
                    >
                        Añadir recordatorio
                    </button>
                </div>
                <div className="mb-4">
                    <button id="formSave" type="submit" 
                    className="rounded py-1 px-8 bg-primary text-white ">
                        GUARDAR
                    </button>
                </div>
            </form>
        </div>
    )
}