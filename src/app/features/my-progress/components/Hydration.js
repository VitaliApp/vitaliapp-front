"use client";

import React from "react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Lun",  vasos: 4 },
  { name: "Mar",  vasos: 10 },
  { name: "Mie",  vasos: 5 },
  { name: "Jue",  vasos: 9 },
  { name: "Vie",  vasos: 8 },
  { name: "Sab",  vasos: 6 },
  { name: "Dom",  vasos: 8 },
];

export default function HydrationGhrapic() {
  return (
    <React.Fragment>
      <div className="mt-24 mb-24 card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Hidratación</h2>
          <p>
            Hidratación, energía y bienestar van de la mano. ¡No subestimes el
            poder del agua!
          </p>
        </div>
        <figure className="mb-11">
          <ResponsiveContainer width="100%" aspect={2}>
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="age"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="vasos"
                stackId="1"
                stroke="#82caed"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </figure>
      </div>
    </React.Fragment>
  );
}
