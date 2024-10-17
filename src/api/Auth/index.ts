interface LoginResponse {
  data: { access_token: string; token_type: string };
  message: string;
  error: boolean;
}

interface LoginRequest {
  document: string;
  password: string;
}

const devUrl = "https://tracking-servioptica-api.txt.co";

export async function loginUser(
  data: LoginRequest
): Promise<Partial<LoginResponse>> {
  const url = `${devUrl}/api/auth/login`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // En caso de error en la respuesta
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const responseData: LoginResponse = await response.json();
    return responseData;
  } catch (error: any) {
    // console.error("Error during login:", error);
    return { error: error.message };
  }
}

/** INFO: Ejemplo de uso
const loginData: LoginRequest = {
    document: '123456789',
    password: 'yourpassword',
};
loginUser(loginData)
    .then(response => {
        if (response.token) {
            console.log('Login successful! Token:', response.token);
        } else {
            console.log('Login failed. Message:', response.message || response.error);
        }
    })
*/
