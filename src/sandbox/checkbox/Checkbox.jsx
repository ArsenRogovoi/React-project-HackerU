import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Input } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Checkboxes() {
  const [isChecked, setChecked] = React.useState(false);
  const handlechange = () => {
    setChecked(!isChecked);
  };

  return (
    <>
      <Checkbox checked={isChecked} onChange={handlechange} />
      <p>checked: {isChecked.toString()}</p>
      <Input />
    </>
  );
}
