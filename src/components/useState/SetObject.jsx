import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SetObject = () => {
  const initialName = {
    first: "",
    last: "",
  };
  const [name, setName] = useState(initialName);

  return (
    <div className="d-flex justify-content-center mt-4">
      <form className="col-4 border p-2 rounded">
        <h5>
          Your name is:{" "}
          <span className="fw-light ">
            {name.first} {name.last}
          </span>
        </h5>
        <input
          className="form-control mb-2"
          placeholder="Enter First Name"
          onChange={(e) => setName({ ...name, first: e.target.value })}
        ></input>
        <input
          className="form-control mb-2"
          placeholder="Enter Last Name"
          onChange={(e) => setName({ ...name, last: e.target.value })}
        ></input>
      </form>
    </div>
  );
};

export default SetObject;
