import { api } from "./api";
import { objectToArray } from "../../helpers";
import { TaskType } from "../../types";

type AddTaskPayload = Omit<TaskType, 'id'>;

const post = async (task: AddTaskPayload) => {
  await api({
    method: "post",
    url: "/tasks.json",
    data: task,
  });
};

const getId = async (id: string) => {
  const data = await api({
    method: "get",
    url: "/tasks/" + id + ".json",
  });
  return data.data;
};

// type Tasks = {
//   [id: string]: TaskType[];
// };

const get = async () => {
  const data = await api({
    method: "get",
    url: "/tasks.json",
  });
  const response = objectToArray(data.data);
  return response;
};

type UpdateTaskPayload = Omit<TaskType, 'status' | 'id'> | Pick<TaskType, 'status'>

const patch = async (id: string, task: UpdateTaskPayload) => {
  await api({
    method: "PATCH",
    url: "/tasks/" + id + ".json",
    data: task,
  });
};

export const task = { post, get, patch, getId };
