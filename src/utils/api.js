import axios from "axios";
export const loadTranslation = async (language = "de") => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}${language}.json`
    );
    return data;
  } catch (error) {
    throw Error(error);
  }
};
