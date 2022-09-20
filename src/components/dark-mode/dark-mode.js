import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const DarkMode = () => {
  return (
    <FormGroup switch>
      <Input type="switch" role="switch" />
      <Label check>Dark Mode</Label>
    </FormGroup>
  );
};

export default DarkMode;
