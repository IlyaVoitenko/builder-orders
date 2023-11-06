import axios from "axios";
const { REACT_APP_BASE_URL } = process.env;
export const loadTranslation = async (language = "de") => {
  try {
    const { data } = await axios.get(`${REACT_APP_BASE_URL}${language}.json`);
    return data;
  } catch (error) {
    throw Error(error);
  }
};
