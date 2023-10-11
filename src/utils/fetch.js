const API_KEY = "YFDfrazrQUNZg1ozlfG0ccYylyR7KxCOTxFGaWbj";
const API_URL = "https://api.nasa.gov/planetary/apod?api_key=";

export default async (params) => {
  try {
    console.log("parametro etch: ", params);
    const response = await fetch(
      `${API_URL}${API_KEY}${
        params !== undefined ? params : ""
      }`
    );
    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
