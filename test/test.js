const axios = require("axios");

const baseURL = "http://localhost:5000";

async function testRoutes() {
  try {
    // Testar a obtenção de todas as tarefas (deve estar vazia inicialmente)
    const allTasksResponse = await axios.get(`${baseURL}/tasks`);
    console.log("Todas as tarefas (inicial):", allTasksResponse.data);

    // Testar a criação de uma tarefa
    const newTask = {
      title: "Nova Tarefa",
      description: "Descrição da nova tarefa",
      completed: false,
    };
    const createdTaskResponse = await axios.post(`${baseURL}/tasks`, newTask);
    console.log("Tarefa criada:", createdTaskResponse.data);

    const taskId = createdTaskResponse.data.id;

    // Testar a obtenção de todas as tarefas após a criação
    const allTasksAfterCreateResponse = await axios.get(`${baseURL}/tasks`);
    console.log(
      "Todas as tarefas (após criação):",
      allTasksAfterCreateResponse.data
    );

    // Testar a obtenção de uma tarefa por ID
    const taskByIdResponse = await axios.get(`${baseURL}/tasks/${taskId}`);
    console.log("Tarefa por ID:", taskByIdResponse.data);

    // Testar a atualização de uma tarefa
    const updatedTask = {
      title: "Tarefa Atualizada",
      description: "Descrição atualizada",
      completed: true,
    };
    const updatedTaskResponse = await axios.put(
      `${baseURL}/tasks/${taskId}`,
      updatedTask
    );
    console.log("Tarefa atualizada:", updatedTaskResponse.data);

    // Testar a obtenção de todas as tarefas após a atualização
    const allTasksAfterUpdateResponse = await axios.get(`${baseURL}/tasks`);
    console.log(
      "Todas as tarefas (após atualização):",
      allTasksAfterUpdateResponse.data
    );

    // Testar a exclusão de uma tarefa
    const deleteTaskResponse = await axios.delete(`${baseURL}/tasks/${taskId}`);
    console.log("Tarefa excluída:", deleteTaskResponse.status);

    // Testar a obtenção de todas as tarefas após a exclusão
    const allTasksAfterDeleteResponse = await axios.get(`${baseURL}/tasks`);
    console.log(
      "Todas as tarefas (após exclusão):",
      allTasksAfterDeleteResponse.data
    );
  } catch (error) {
    console.error(
      "Erro ao testar as rotas:",
      error.response ? error.response.data : error.message
    );
  }
}

testRoutes();
