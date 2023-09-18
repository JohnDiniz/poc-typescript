import { Request, Response } from "express";
import * as TaskRepository from "../repository/taskRepository";

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await TaskRepository.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar as tarefas do banco de dados." });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const task = await TaskRepository.getTaskById(id);

    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: "Tarefa não encontrada" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar a tarefa do banco de dados." });
  }
};

export const createTask = async (req: Request, res: Response) => {
  const { title, description, completed } = req.body;

  const newTask = {
    title,
    description,
    completed,
  };

  try {
    const createdTask = await TaskRepository.createTask(newTask);
    res.status(201).json(createdTask);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao criar a tarefa no banco de dados." });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { title, description, completed } = req.body;

  const updatedTask = {
    title,
    description,
    completed,
  };

  try {
    const updated = await TaskRepository.updateTask(id, updatedTask);

    if (updated) {
      res.json(updated);
    } else {
      res.status(404).json({ message: "Tarefa não encontrada" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao atualizar a tarefa no banco de dados." });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const deleted = await TaskRepository.deleteTask(id);

    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Tarefa não encontrada" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao excluir a tarefa do banco de dados." });
  }
};
