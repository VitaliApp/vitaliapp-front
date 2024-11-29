import React from "react";
import FeedingForm from "./FeedingForm";
import RestForm from "./RestForm";
import HydrationForm from "./HydrationForm";
import ExerciseForm from "./ExerciseForm";

export default function TagsCalendar() {
  return (
    <React.Fragment>
      <div className="w-full mt-24 md:w-80 md:ml-6 mb-8 card  bg-base-100 shadow-xl">
        <div
          tabIndex={0}
          className="collapse collapse-arrow card-body bg-orange-50"
        >
          <div className="collapse-title">
            <h2 className="card-title">Alimentacion</h2>
          </div>
          <div className="collapse-content">
            <FeedingForm />
          </div>
          {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
        </div>
        <div
          tabIndex={0}
          className=" collapse collapse-arrow card-body bg-indigo-50"
        >
          <div className="collapse-title">
            <h2 className="card-title">Descanso</h2>
          </div>
          <div className="collapse-content">
            <RestForm />
          </div>

          {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
        </div>
        <div
          tabIndex={0}
          className=" collapse collapse-arrow card-body bg-teal-50"
        >
          <div className="collapse-title">
            <h2 className="card-title">Hidratacion</h2>
          </div>
          <div className="collapse-content">
            <HydrationForm />
          </div>

          {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow card-body bg-pink-50"
        >
          <div className="collapse-title">
            <h2 className="card-title">Ejercicio</h2>
          </div>
          <div className="collapse-content">
            <ExerciseForm />
          </div>

          {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
        </div>
      </div>
    </React.Fragment>
  );
}
