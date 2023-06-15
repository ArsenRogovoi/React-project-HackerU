import { Box, Container } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const getTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  const mili = date.getMilliseconds();
  return `${time}.${mili}`;
};

const LifeCycleHooksComp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`in useEffect: ${getTime()}`);
    setCount((prev) => prev + 1);
  }, []);

  return (
    <Container maxWidth="lg">
      {console.log("in render: " + getTime())}
      <Box>Count: {count}</Box>
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </Button>
      </div>
    </Container>
  );
};

export default LifeCycleHooksComp;
