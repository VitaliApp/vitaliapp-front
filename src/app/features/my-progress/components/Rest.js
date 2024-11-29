"use client";

import React from "react";
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell } from "recharts";

const data = [
  { name: "Lunes", value: 8 },
  { name: "Martes", value: 10 },
  { name: "Miercoles", value: 8 },
  { name: "Jueves", value: 6 },
  { name: "Viernes", value: 3 },
  { name: "Sabado", value: 8 },
  { name: "Domingo", value: 10 }
];

const COLORS = [
  "#68DDD3",
  "#5c6bc0",
  "#b39ddb",
  "#4dd0e1",
  "#f48fb1",
  "#d500f9",
  "#FE1D00"
];

export default function RestGhrapic() {
  return (
    <React.Fragment>
      <div className="md:mr-16 card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Descanso</h2>
          <p>
            Recuerda que cumplir con tus horas de sueño es fundamental para tu
            salud y bienestar general. ¡Haz del descanso una prioridad en tu
            vida diaria!
          </p>
        </div>
        <figure>
          <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={data}
                  innerRadius={60}
                  outerRadius={85}
                  fill="#82ca9d"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </figure>
      </div>
    </React.Fragment>
  );
}
