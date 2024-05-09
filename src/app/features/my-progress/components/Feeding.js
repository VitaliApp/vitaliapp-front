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
  { name: "Lun", carne: 10, carbohidratos: 60 , vegetales: 70, cereales: 20, azucares: 40},
  { name: "Mar", carne: 10, carbohidratos: 60 , vegetales: 70, cereales: 20, azucares: 40 },
  { name: "Mie", carne: 10, carbohidratos: 60 , vegetales: 70, cereales: 20, azucares: 40 },
  { name: "Jue", carne: 10, carbohidratos: 60 , vegetales: 70, cereales: 20, azucares: 40 },
  { name: "Vie", carne: 10, carbohidratos: 60 , vegetales: 70, cereales: 20, azucares: 40 },
  { name: "Sab", carne: 10, carbohidratos: 60 , vegetales: 70, cereales: 20, azucares: 40 },
  { name: "Dom", carne: 10, carbohidratos: 60 , vegetales: 70, cereales: 20, azucares: 40 },
];

export default function FeedingGrhapic() {
  return (
    <React.Fragment>
      <div className="md:mr-16 w-96 mt-24 mb-24 card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Mi alimentacion</h2>
          <p>La alimentación saludable no es una dieta, es un estilo de vida</p>
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
              <Bar dataKey="carne" fill="#6b48ff" />
              <Bar dataKey="carbohidratos" fill="#1ee3cf" />
              <Bar dataKey="cereales" fill="#FE1D00" />
              <Bar dataKey="vegetales" fill="#455A64" />
              <Bar
                dataKey="azucares"
                fill="#FFBF9D"
              />
            </BarChart>
          </ResponsiveContainer>
        </figure>
      </div>
    </React.Fragment>
  );
}
