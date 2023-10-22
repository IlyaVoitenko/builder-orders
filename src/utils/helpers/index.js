import { setTranslate } from "../../store/thunk";
import { setCurrentLanguage } from "../../store/reducer/translate";

export const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export const changeLanguage = (language, dispatch) => {
  dispatch(setCurrentLanguage(language));
  dispatch(setTranslate(language));
};
export const validationFornBtn = (isAgree, lastname, email, requestUser) => {
  if (isAgree && lastname !== "" && email !== "" && requestUser !== "") {
    return false;
  }
  return true;
};
