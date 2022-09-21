import { connect, useSelector } from "react-redux";
import Counter from "./components/counter/counter";
import DarkMode from "./components/dark-mode/dark-mode";
import LangSwitcher from "./components/lang-switcher/lang-switcher";
import { $lng } from "./helpers/locale-helper";

const App = ({ lang, darkModeStatus }) => {
  //const darkModeStatus = useSelector((state) => state.darkMode.status);

  // Language switcher üzerinden dil değiştiğinde tüm app i re-render yapmak için
  // bu satırı koyduk
  //const lang = useSelector((state) => state.locale.lang);

  return (
    <div className={`app m-0 p-5 ${darkModeStatus && "dark"}`}>
      <DarkMode />
      <LangSwitcher />
      <Counter />

      <div>{$lng("hello-world")}</div>
    </div>
  );
};

// Merkezi state deki değerleri prop olarak bir componente bağlamak için kullanılır
const mapStateToProps = (state) => {
  const { locale, darkMode } = state;
  return { lang: locale.lang, darkModeStatus: darkMode.status };
};

export default connect(mapStateToProps)(App);
