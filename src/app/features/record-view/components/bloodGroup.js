import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getBloodGroupAPI } from "../api/bloodGroupAPI";

export default function BloodGroup() {
  const [bloodGroups, setBloodGroup] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBloodType = async () => {
      const res = await getBloodGroupAPI();
      setBloodGroup(res.bloodGroup);
      setIsLoading(false);
      console.log("RES BLOODTYPE", res.bloodGroup);
    };

    getBloodType();
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
        {!bloodGroups.length ? (
          <div className="flex flex-row justify-center">
            <Image
              src="../record/blood.svg"
              alt="blood-drop"
              width={30}
              height={40}
            />
            <div className="bg-white rounded-lg m-1 py-3 w-52">
              <p className="text-sm text-center">
                Aun no haz completado tu expediente
              </p>
            </div>
          </div>
        ) : (
          bloodGroups.slice(0, 5).map((bloodType, index) => (
            <ul className="list-disc flex justify-center" key={index}>
              <li>
                <p className="text-sm text-center font-bold mt-4">
                  {bloodType.blood_type}
                </p>
              </li>
            </ul>
          ))
        )}
      </div>
    </React.Fragment>
  );
}