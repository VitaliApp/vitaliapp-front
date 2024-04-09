import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { getMedicineAPI } from "../api/medicineAPI";

export default function Medicine() {
  const [medicines, setMedicines] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMedicine = async () => {
      const res = await getMedicineAPI();
      setMedicines(res.medicines);
      setIsLoading(false);
      console.log("RES MEDICINES", res.medicines);
    };

    getMedicine();
  }, []);

  if (isLoading) {
    return (
      <React.Fragment>
        <div className="flex justify-center">
          <p>Loading...</p>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div>
        {!medicines.length ? (
          <div className="flex flex-row justify-center">
            <Image
              src="../record/medicine.svg"
              alt="medicine"
              width={40}
              height={50}
            />
            <div className="bg-white rounded-lg m-1 py-3 w-52">
              <p className="text-sm text-center">
                Aun no haz completado tu expediente
              </p>
            </div>
          </div>
        ) : (
          medicines.slice(0, 5).map((medicine, index) => (
            <ul className="list-disc flex justify-center" key={index}>
              <li>
                <p className="text-sm text-center">{medicine.medicine}</p>
              </li>
            </ul>
          ))
        )}
      </div>
    </React.Fragment>
  );
}