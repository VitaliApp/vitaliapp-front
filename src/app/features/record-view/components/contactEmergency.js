import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { getEmergencyContactAPI } from "../api/emergencyContactAPI";

export default function ContactEmergency() {
//   const [contacts, setContacts] = useState();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const getContact = async () => {
//       const res = await getEmergencyContactAPI();
//       setContacts(res.contact);
//       setIsLoading(false);
//       console.log("RES CONTACTS", res.contact);
//     };

//     getContact();
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
//         {!contacts.length ? (
//           <div className="flex flex-row justify-center">
//             <Image
//               src="../record/contact.svg"
//               alt="contact"
//               width={30}
//               height={50}
//             />
//             <div className="bg-white rounded-lg m-1 py-3 w-52">
//               <p className="text-sm text-center">
//                 Aun no haz completado tu expediente
//               </p>
//             </div>
//           </div>
//         ) : (
//           contacts.slice(0, 5).map((contact, index) => (
//             <ul className="list-disc flex justify-center" key={index}>
//               <li>
//                 <p className="text-sm text-center">
//                   {contact.emergency_contact.name} - {" "}
//                   {contact.emergency_contact.cel}
//                 </p>
//               </li>
//             </ul>
//           ))
//         )}
//       </div>
//     </React.Fragment>
//   );
    return (
        <>
            <div className="flex flex-row justify-center">
                <Image
                  src="../icons/contact.svg"
                  alt="contact"
                  width={30}
                  height={50}
                />
                <EmptyRecord />
            </div>
        </>
    )
}