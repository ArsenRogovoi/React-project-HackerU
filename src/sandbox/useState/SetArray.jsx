import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SetArray = () => {
  const INITIAL_TODO = { todo: "" };
  const [task, setTask] = useState(INITIAL_TODO);
  const [tasks, setTasks] = useState([]);

  const createNewTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    return setTask(INITIAL_TODO);
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <div>
        <form className="col-12 border p-2 rounded">
          <h5>
            Task:
            <span className="fw-light">{task.todo}</span>
          </h5>

          <div className="input-group my-2">
            <button
              disabled={!task.todo}
              onClick={createNewTask}
              className="input-group-text"
              id="inputGroup-sizing-default"
            >
              Create
            </button>
            <input
              onChange={(e) => setTask({ ...task, todo: e.target.value })}
              value={task.todo}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </form>

        <ul>
          {tasks.map((todo, index) => (
            <li key={index}>
              {index + 1}. {todo.todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SetArray;
