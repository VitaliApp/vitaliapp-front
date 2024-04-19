const BACK_URL = process.env.NEXT_PUBLIC_BACK_URL;
import { getSession } from "next-auth/react";
export async function getEmergencyContactAPI() {
  try {
    const session = await getSession();
    console.log(session.jwt, 'SESSION')
    const response = await fetch(`${BACK_URL}/contact/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.jwt}`,
      },
      next: {
        revalidate: 500,
      },
    });
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error, "error al crear la solicitud");
  }
}