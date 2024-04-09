// const BACK_URL = process.env.NEXT_PUBLIC_BACK_URL;
// import { getSession } from "next-auth/react";

// export async function updatedUserProfileAPI(data) {
//   console.log(data, "DATA");
//   try {
//     const session = await getSession();
//     const response = await fetch(`${BACK_URL}/user/editProfile`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${session.jwt}`,
//       },
//       body: JSON.stringify(data),
//     });
//     const jsonResponse = await response.json();
//     return jsonResponse;
//   } catch (error) {
//     console.log(error, "error al crear la solicitud");
//   }
// }

// export async function getUserInfoAPI() {
//   try {
//     const session = await getSession();
//     const response = await fetch(`${BACK_URL}/user/profile`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${session.jwt}`,
//       },
//       next: {
//         revalidate: 500,
//       },
//     });
//     const jsonResponse = await response.json();
//     return jsonResponse;
//   } catch (error) {
//     console.log(error, "error al crear la solicitud");
//   }
// }