import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SetCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="d-flex justify-content-center mt-2">
      <div>
        <div className="mx-2 text-center mb-2">{`Counter ${counter}`}</div>

        <button
          onClick={() => setCounter((counter) => counter + 1)}
          className="btn btn-btn-outline-dark"
        >
          +
        </button>

        <button
          onClick={() => setCounter((counter) => counter - 1)}
          className="btn btn-btn-outline-dark mx-2"
        >
          -
        </button>

        <button
          onClick={() => setCounter(0)}
          className="btn btn-btn-outline-dark"
        >
          reset counter
        </button>
      </div>
    </div>
  );
};

export default SetCounter;
