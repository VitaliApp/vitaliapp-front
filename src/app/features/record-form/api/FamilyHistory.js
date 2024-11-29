const BACK_URL = process.env.NEXT_PUBLIC_BACK_URL;
import { getSession } from "next-auth/react";

export async function createFamilyHistoryAPI(data) {
  console.log(data, "DATA");
  try {
    const session = await getSession();
    const response = await fetch(`${BACK_URL}/familyHistory/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.jwt}`,
      },
      body: JSON.stringify(data),
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse, 'JSON RES')
    return jsonResponse;
  } catch (error) {
    console.log(error, "error al crear la solicitud");
  }
}