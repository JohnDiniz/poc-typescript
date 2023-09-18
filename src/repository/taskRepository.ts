import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();
import pool from "../db/db";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export const getAllTasks = async (): Promise<Task[]> => {
  const query = "SELECT * FROM tasks";
  const { rows } = await pool.query(query);
  return rows;
};

export const getTaskById = async (id: number): Promise<Task | null> => {
  const query = "SELECT * FROM tasks WHERE id = $1";
  const { rows } = await pool.query(query, [id]);
  return rows[0] || null;
};

export const createTask = async (taskData: Omit<Task, "id">): Promise<Task> => {
  const { title, description, completed } = taskData;
  const query =
    "INSERT INTO tasks (title, description, completed) VALUES ($1, $2, $3) RETURNING *";
  const values = [title, description, completed];

  try {
    const { rows } = await pool.query(query, values);

    if (rows.length === 0) {
      throw new Error(
        "Erro ao criar a tarefa no banco de dados: Nenhuma linha retornada."
      );
    }

    return {
      id: rows[0].id,
      title: rows[0].title,
      description: rows[0].description,
      completed: rows[0].completed,
    };
  } catch (error) {
    console.error("Erro ao criar a tarefa no banco de dados:", error);
    throw new Error("Erro ao criar a tarefa no banco de dados.");
  }
};
export const updateTask = async (
  id: number,
  updatedTaskData: Partial<Task>
): Promise<Task | null> => {
  const { title, description, completed } = updatedTaskData;
  const query =
    "UPDATE tasks SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *";
  const values = [title, description, completed, id];

  try {
    const { rows } = await pool.query(query, values);

    return rows[0] || null;
  } catch (error) {
    throw new Error("Erro ao atualizar a tarefa no banco de dados.");
  }
};
export const deleteTask = async (id: number): Promise<boolean> => {
  const query = "DELETE FROM tasks WHERE id = $1";
  const result = await pool.query(query, [id]);
  return result.rowCount > 0;
};
