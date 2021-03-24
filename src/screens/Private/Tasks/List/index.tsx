import React, { useState, useEffect, FC } from "react";
import { Layout } from "../../../../components";
import { Link } from "react-router-dom";
import { task } from "../../../../utils";
import { Task } from "./components/Task";
import { TaskType } from "../../../../types";

const List: FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>();

  useEffect(() => {
    task.get().then((response) => {
        setTasks(response);
    })
  }, []);

  console.log(tasks);
  return (
    <>
      <div className="row">
        <h2 className="col-6">Agrgar tarea</h2>

        <Link to="/tasks/add">
          <button type="button" className="btn btn-primary col-2">
            Left
          </button>
        </Link>
      </div>
      <div className="row">
        {tasks && tasks.map((task: TaskType) => (
          <Task data={task} />
        ))}
      </div>
    </>
  );
};

export { List };
