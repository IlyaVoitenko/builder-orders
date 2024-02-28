import axios from "axios";
const { REACT_APP_BASE_URL_SERVER } = process.env;

export const loadTranslation = async (language = "de") => {
  try {
    const { data } = await axios.get(
      `${REACT_APP_BASE_URL_SERVER}/api/translations/locales/${language}`
    );
    return data;
  } catch (error) {
    throw Error(error);
  }
};
