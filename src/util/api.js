import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const fetchTranslation = async (text, targetLanguage) => { // Ensure correct parameter name
  try {
    const resp = await axios.get(`${BASE_URL}/translate`, {
      params: { text, targetLanguage }, // Ensure correct parameter names
    });

    console.log(resp.data.translation);
    return resp.data;
  } catch (error) {
    console.error("Error fetching translation:", error);
    alert("Failed to fetch translation. Please try again.");
  }
};
