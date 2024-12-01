import axios from "axios";

const API_KEY = "3f86a3533cd6821355db46224b99302d";

export const fetchTreding = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/week",
    {
      params: { api_key: API_KEY },
    }
  );
  return response.data.results;
};

export const fetchDetails = async (id) => {
  const response = await axios.get(
    `"https://api.themoviedb.org/3/movie/${id}"`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data;
};
