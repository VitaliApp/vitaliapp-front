"use client";

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Lun",  ejercicio: 10 },
  { name: "Mar",  ejercicio: 30 },
  { name: "Mie",  ejercicio: 20 },
  { name: "Jue",  ejercicio: 85 },
  { name: "Vie",  ejercicio: 40 },
  { name: "Sab",  ejercicio: 50 },       
  { name: "Dom",  ejercicio: 30 },
];

export default function ExerciseGhrapic() {
  return (
    <React.Fragment>
      <div className="mb-24 mt-24 md:mt-0 card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Ejercicio</h2>
          <p>
            No esperes a sentirte motivado para hacer ejercicio. La motivación
            viene después de empezar. ¡Solo hazlo!
          </p>
        </div>
        <figure>
          <ResponsiveContainer width="100%" aspect={2}>
            <BarChart
              className="mb-8"
              data={data}
              width={500}
              height={300}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="4 1 2" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="ejercicio" fill="#6b48ff" />
            </BarChart>
          </ResponsiveContainer>
        </figure>
      </div>
    </React.Fragment>
  );
}
