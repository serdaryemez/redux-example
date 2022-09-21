import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { getCurrentLang, langs, setCurrentLang } from "../../helpers/locale-helper";

const LangSwitcher = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const currentLang = getCurrentLang();

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        <span className={`fi fi-${currentLang.country}`}></span> {currentLang.title}
      </DropdownToggle>
      <DropdownMenu>
        {langs.map((lang, index) => (
          <DropdownItem key={index} onClick={()=>setCurrentLang(lang.code)}>
            <span className={`fi fi-${lang.country}`}></span> {lang.title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LangSwitcher;
