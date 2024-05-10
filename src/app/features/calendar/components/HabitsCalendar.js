import { Calendar } from "antd";
import React from "react";

export default function HabitsCalendar () {
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
             <div className="md:hidden w-full h-full  md:w-150 mb-24">
          <Calendar fullscreen={false} />
        </div>

        <div className="hidden md:block px-8 mt-24 mb-8  w-full">
          <Calendar
            // cellRender={dateCellRender}
            onSelect={onSelect}
            onPanelChange={onPanelChange}
          />
        </div>
        </React.Fragment>
    )
}