import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { getFamilyHistoryAPI } from "../api/familyHistoryAPI";

export default function FamilyHistoryRedord() {
  const [familyHistorys, setFamilyHistory] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFamilyHistory = async () => {
      const res = await getFamilyHistoryAPI();
      setFamilyHistory(res.familyHistory);
      setIsLoading(false);
      console.log("RES FAMILY HISTORY", res.familyHistory);
    };

    getFamilyHistory();
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
        {!familyHistorys.length ? (
          <div className="flex flex-row justify-center">
            <Image
              src="../record/family.svg"
              alt="family"
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
          familyHistorys.slice(0, 5).map((family, index) => (
            <ul className="list-disc flex justify-center" key={index}>
              <li>
                <p className="text-sm text-center">
                  {family.family_related_deseases.name} - {" "}
                  {family.family_related_deseases.ailment}
                </p>
              </li>
            </ul>
          ))
        )}
      </div>
    </React.Fragment>
  );
}