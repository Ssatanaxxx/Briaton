export async function validateResponse(response: Response): Promise<Response> {
  if (!response.ok) {
    let errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;

    try {
      const errorData = await response.text();
      if (errorData) {
        errorMessage += ` - ${errorData}`;
      }
    } catch {
    }

    throw new Error(errorMessage);
  }
  return response;
}
