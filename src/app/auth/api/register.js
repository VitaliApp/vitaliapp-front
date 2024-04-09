const BACK_URL = process.env.NEXT_PUBLIC_BACK_URL; 
export async function userRegisterAPI(data) {
  try {
    const response = await fetch(`${BACK_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error, "error al crear la solicitud");
  }
}
