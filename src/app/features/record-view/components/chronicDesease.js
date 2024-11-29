import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getChronicDeseaseAPI } from "../api/chronicDeseaseAPI";

export default function ChronicDesease() {
  const [chronics, setChronic] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getChronicDeseases = async () => {
      const res = await getChronicDeseaseAPI();
      setChronic(res.chronicDesease);
      setIsLoading(false);
      console.log("RES CHRONIC", res.chronicDesease);
    };

    getChronicDeseases();
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
        {!chronics.length ? (
          <div className="flex flex-row justify-center">
            <Image
              src="../record/heart.svg"
              alt="heart icon"
              width={30}
              height={30}
            />
            <div className="bg-white rounded-lg m-1 py-3 w-52">
              <p className="text-sm text-center">
                Aun no haz completado tu expediente
              </p>
            </div>
          </div>
        ) : (
          chronics.slice(0, 5).map((chronic, index) => (
            <ul className="list-disc flex justify-center" key={index}>
              <li>
                <p className="text-sm text-center">{chronic.chronicDesease}</p>
              </li>
            </ul>
          ))
        )}
      </div>
    </React.Fragment>
  );
}