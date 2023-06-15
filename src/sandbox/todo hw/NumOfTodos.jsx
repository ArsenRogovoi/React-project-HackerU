import { Typography } from "@mui/material";
import { memo } from "react";

const NumOfTodos = ({ num }) => {
  console.log(`in num of todos: ${new Date().toLocaleTimeString()}`);
  return <Typography>num of todos: {num}</Typography>;
};
export default memo(NumOfTodos);
