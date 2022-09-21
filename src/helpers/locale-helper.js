import store from "../store";
import { setLang } from "../store/slices/locale-slice";

const langs = [
  { title: "English", code: "en", country: "gb" },
  { title: "Türkçe", code: "tr", country: "tr" },
  { title: "Français", code: "fr", country: "fr" },
];

const getCurrentLang = () => {
  const currentLangCode = store.getState().locale.lang;

  const lang = langs.filter((item) => item.code === currentLangCode)[0];
  return lang;
};

const setCurrentLang = (code) => {
  store.dispatch(setLang(code));
};

const $lng = (key) => {
    const currentLangCode = store.getState().locale.lang;
    const langFile = require(`../helpers/langs/${currentLangCode}.json`);
    console.log(langFile[key]);
    
    return langFile[key];
}

export { langs, getCurrentLang, setCurrentLang, $lng };
