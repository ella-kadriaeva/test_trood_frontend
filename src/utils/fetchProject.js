// const BASE_BACKEND_URL = "http://localhost:8080";
const BASE_BACKEND_URL = "https://test-trood-backend.onrender.com";
export const getAllProjects = async () => {
  try {
    const response = await fetch(`${BASE_BACKEND_URL}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error("Something went wrong!" + response.statusText);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getProjectsById = async (id) => {
  try {
    const response = await fetch(`${BASE_BACKEND_URL}/projects/${id}`);
    if (!response.ok) {
      throw new Error("Something went wrong!" + response.statusText);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
