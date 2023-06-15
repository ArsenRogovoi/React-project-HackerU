import { Add } from "@mui/icons-material";
import { Box, Divider, IconButton, Input, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import TodoItem from "./TodoItem";
import NumOfTodos from "./NumOfTodos";

const Todo = () => {
  const initialTodo = {
    value: "initialTodo",
    onEdit: false,
  };

  const [todos, setTodos] = useState([initialTodo]);
  const [numOfTodos, setNumOfTodos] = useState(todos.length);
  const [onEdit, setOnEdit] = useState(false);
  let numOfTodosForUseCallback = numOfTodos;

  const changeNumOfTodos = useCallback(() => {
    console.log("in useCallback");
    setNumOfTodos(numOfTodosForUseCallback);
  }, [numOfTodosForUseCallback]);

  const addNewTodo = () => {
    console.log("in addNewTodo func");
    const input = document.querySelector("#new-task-input");
    const task = input.value;
    const newTodos = [...todos, { ...initialTodo, value: task }];
    setTodos(newTodos);
    input.value = "";
    numOfTodosForUseCallback++;
    changeNumOfTodos();
  };

  const editTodo = (todo) => {
    console.log("in editTodo func");
    todo.onEdit = true;
    setOnEdit(true);
  };

  const confirmEditing = (todo, editedTask) => {
    console.log("in confirmEditing func");
    todo.onEdit = false;
    todo.value = editedTask;
    setOnEdit(false);
  };

  const deleteTodo = (taskToDelete) => {
    console.log("in deleteTodo func");
    const newTodos = todos.filter((todo) => todo !== taskToDelete);
    setTodos(newTodos);
    numOfTodosForUseCallback--;
    changeNumOfTodos();
  };

  return (
    <>
      <Typography variant="h3">Todo list</Typography>
      <NumOfTodos num={numOfTodos} />
      <Divider />
      {todos.map((todo, ind) => (
        <Box key={ind}>
          <TodoItem
            todo={todo}
            ind={ind}
            editTodo={editTodo}
            confirmEditing={confirmEditing}
            deleteTodo={deleteTodo}
          />
        </Box>
      ))}
      <Input id="new-task-input" />
      <IconButton color="primary" onClick={addNewTodo}>
        <Add />
      </IconButton>
    </>
  );
};
export default Todo;
