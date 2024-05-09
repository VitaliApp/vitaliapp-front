"use client";

import { Calendar } from "antd";
import React from "react";

export default function CalendarCompon() {
  const dateCellRender = () => {
    return (
      <React.Fragment>
        <p className="bg-indigo-50 text-center font-bold">8hrs sueño</p>
        <p className="bg-teal-50 text-center font-bold">8 vasos</p>
        <p className="bg-pink-50 text-center font-bold">10m ejercicio</p>
      </React.Fragment>
    );
  };

  const onSelect = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode, "yoooooo");
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
    <React.Fragment>
      <div className="md:flex">
        <div className="w-full mt-24 md:w-80 md:ml-6 mb-8 card  bg-base-100 shadow-xl">
          <div className="card-body bg-orange-50">
            <h2 className="card-title">Tu alimentacion</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
          <div className="card-body bg-indigo-50">
            <h2 className="card-title">Hrs de Descanso</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
          <div className="card-body bg-teal-50">
            <h2 className="card-title">Vasos de agua</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
          <div className="card-body bg-pink-50">
            <h2 className="card-title">Tiempo de ejercicio</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>

        <div className="md:hidden w-full h-full  md:w-150 mb-24">
          <Calendar fullscreen={false} />
        </div>

        <div className="hidden md:block px-8 mt-24 mb-8  w-full">
          <Calendar
            cellRender={dateCellRender}
            onSelect={onSelect}
            onPanelChange={onPanelChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
