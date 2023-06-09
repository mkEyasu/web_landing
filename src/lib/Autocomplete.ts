import axios from "axios";

declare var process: {
  env: {
    NEXT_PUBLIC_A_KEY: string;
  };
};

export const Autocomplete = async (content: string) => {
  if (typeof window !== "undefined") {
    let api_key = process.env.NEXT_PUBLIC_A_KEY;
    const config = {
      method: "GET",
      url: `https://api.geoapify.com/v1/geocode/autocomplete?text=${content}&apiKey=${api_key}`,
      headers: {},
    };
    const response = await axios(config);
    if (response.status === 200) {
      return response.data;
    }
  }
};
