import { Task } from "types/task.type";

const tasks: Task[] = [];

export const getAllTasks = (): Task[] => {
  return tasks;
};

export const getTaskById = (id: number): Task | undefined => {
  return tasks.find((task) => task.id === id);
};

export const createTask = (task: Task): Task => {
  tasks.push(task);
  return task;
};

export const updateTask = (id: number, updatedTask: Task): Task | undefined => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks[index] = updatedTask;
    return updatedTask;
  }
  return undefined;
};

export const deleteTask = (id: number): boolean => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    return true;
  }
  return false;
};
