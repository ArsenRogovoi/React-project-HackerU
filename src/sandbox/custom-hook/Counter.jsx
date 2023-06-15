import { Box, Button, Paper, Typography } from "@mui/material";
import useCounter from "./useCounter";

const Counter = () => {
  const [count, increment, decrement, reset] = useCounter();

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper sx={{ width: 500, mt: 2 }}>
        <Box>
          <Typography align="center">Count: {count}</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button onClick={increment} variant="outlined" sx={{ m: 0 }}>
              Increment
            </Button>
            <Button onClick={decrement} variant="outlined" sx={{ m: 0 }}>
              Decrement
            </Button>
            <Button onClick={reset} variant="outlined" sx={{ m: 0 }}>
              Reset
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
export default Counter;
