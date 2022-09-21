import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormGroup, Input, Label } from "reactstrap";
import { $lng } from "../../helpers/locale-helper";
import { setDarkMode } from "../../store/slices/dark-mode-slice";

const DarkMode = () => {
  const darkmodeStatus = useSelector((state) => state.darkMode.status);
  const dispatch = useDispatch();

  return (
    <FormGroup switch>
      <Input
        type="switch"
        role="switch"
        id="switch"
        checked={darkmodeStatus}
        onChange={() => dispatch(setDarkMode(!darkmodeStatus))}
      />
      <Label check for="switch">
        {!darkmodeStatus ? $lng("dark-mode") : $lng("light-mode")}
      </Label>
    </FormGroup>
  );
};

export default DarkMode;
