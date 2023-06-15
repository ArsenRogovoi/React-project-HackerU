import { Delete, Done, Edit } from "@mui/icons-material";
import { IconButton, Input, Typography } from "@mui/material";
import { useState } from "react";

const TodoItem = ({ todo, ind, editTodo, confirmEditing, deleteTodo }) => {
  const [inputValue, setInputValue] = useState(todo.value);

  const onChangeInputHandle = (event) => {
    setInputValue(event.target.value);
  };

  console.log(`in TodoItem ${new Date().toLocaleTimeString()}`);
  if (todo.onEdit) {
    return (
      <>
        <Typography variant="h5" component="p">
          {ind + 1}
          {`) `}
        </Typography>
        <Input
          sx={{ display: "inline-block" }}
          value={`${inputValue}`}
          onChange={(e) => onChangeInputHandle(e)}
        />
        <IconButton onClick={() => confirmEditing(todo, inputValue)}>
          <Done />
        </IconButton>
      </>
    );
  } else {
    return (
      <Typography variant="h5" component="p" key={ind}>
        {ind + 1}
        {`) `}
        {todo.value}
        <IconButton color="primary" onClick={() => editTodo(todo)}>
          <Edit />
        </IconButton>
        <IconButton color="warning" onClick={() => deleteTodo(todo)}>
          <Delete />
        </IconButton>
      </Typography>
    );
  }
};
export default TodoItem;
