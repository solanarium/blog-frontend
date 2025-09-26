export const toJson = async (response: Response) => {
  if (response.ok) {
    return response.json()
  } else {
    const error = await response.json()

    throw new Error(error.message)
  }
}
