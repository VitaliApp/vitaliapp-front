import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { getAllergiesAPI } from "../api/getAllergiesAPI";

export default function Allergies() {
//   const [allergies, setAllergies] = useState();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const getAllergies = async () => {
//       const res = await getAllergiesAPI();
//       setAllergies(res.allergies);
//       setIsLoading(false);
//       console.log("RES ALLERGIES", res.allergies);
//     };

//     getAllergies();
//   }, []);

//   if (isLoading) {
//     return (
//       <React.Fragment>
//         <div className="flex justify-center">
//           <p>Loading...</p>
//         </div>
//       </React.Fragment>
//     );
//   }

//   return (
//     <React.Fragment>
//       <div>
//         {!allergies.length ? (
//           <div className="flex flex-row justify-center">
//             <Image
//               src="../record/sick.svg"
//               alt="sick emoji"
//               width={40}
//               height={50}
//             />
//             <div className="bg-white rounded-lg m-1 py-3 w-52">
//               <p className="text-sm text-center">
//                 Aun no haz completado tu expediente
//               </p>
//             </div>
//           </div>
//         ) : (
//           allergies.slice(0, 5).map((allergie, index) => (
//             <ul className="list-disc flex justify-center" key={index}>
//               <li>
//                 <p className="text-sm text-center">{allergie.allergies}</p>
//               </li>
//             </ul>
//           ))
//         )}
//       </div>
//     </React.Fragment>
//   );
    return(
        <>
            <div className="flex flex-row justify-center">
                <Image
                  src="../icons/sick.svg"
                  alt="sick emoji"
                  width={40}
                  height={50}
                />
                <EmptyRecord />
            </div>
        </>
    )
}