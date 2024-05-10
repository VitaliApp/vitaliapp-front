import React from "react";
import FeedingForm from "./FeedingForm";
import RestForm from "./RestForm";
import HydrationForm from "./HydrationForm";
import ExerciseForm from "./ExerciseForm";

export default function TagsCalendar () {
    return (
        <React.Fragment>
            <div className="w-full mt-24 md:w-80 md:ml-6 mb-8 card  bg-base-100 shadow-xl">
          <div className="card-body bg-orange-50">
            <h2 className="card-title">Tu alimentacion</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <FeedingForm/>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
          <div className="card-body bg-indigo-50">
            <h2 className="card-title">Tiempo de Descanso</h2>
            <RestForm/>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
          <div className="card-body bg-teal-50">
            <h2 className="card-title">Vasos de agua</h2>
            <HydrationForm/>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
          <div className="card-body bg-pink-50">
            <h2 className="card-title">Tiempo de ejercicio</h2>
            <ExerciseForm/>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>
        </React.Fragment>
    )
}