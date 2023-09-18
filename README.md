## Função `testRoutes()`

A função `testRoutes()` realiza uma série de testes nas rotas da API. Abaixo estão os passos realizados por esta função:

1.  **Obtenção de Todas as Tarefas (Inicial):**
    
    ```javascript
    javascriptCopy codeconst allTasksResponse = await axios.get(`${baseURL}/tasks`);
    console.log("Todas as tarefas (inicial):", allTasksResponse.data);
    
    ```
    
    Esta etapa verifica o estado inicial das tarefas na API e exibe a resposta no console.
    
2.  **Criação de uma Nova Tarefa:**
    
    ```javascript
    javascriptCopy codeconst newTask = {
      title: "Nova Tarefa",
      description: "Descrição da nova tarefa",
      completed: false,
    };
    const createdTaskResponse = await axios.post(`${baseURL}/tasks`, newTask);
    console.log("Tarefa criada:", createdTaskResponse.data);
    
    ```
    
    Aqui, uma nova tarefa é criada e a resposta da API é exibida no console.
    
3.  **Obtenção de Todas as Tarefas Após a Criação:**
    
    ```javascript
    javascriptCopy codeconst allTasksAfterCreateResponse = await axios.get(`${baseURL}/tasks`);
    console.log(
      "Todas as tarefas (após criação):",
      allTasksAfterCreateResponse.data
    );
    
    ```
    
    Após a criação da tarefa, a função verifica novamente todas as tarefas para incluir a tarefa recém-criada.
    
4.  **Obtenção de uma Tarefa por ID:**
    
    ```javascript
    javascriptCopy codeconst taskByIdResponse = await axios.get(`${baseURL}/tasks/${taskId}`);
    console.log("Tarefa por ID:", taskByIdResponse.data);
    
    ```
    
    Nesta etapa, uma tarefa é obtida por ID e a resposta é exibida no console.
    
5.  **Atualização de uma Tarefa:**
    
    ```javascript
    javascriptCopy codeconst updatedTask = {
      title: "Tarefa Atualizada",
      description: "Descrição atualizada",
      completed: true,
    };
    const updatedTaskResponse = await axios.put(
      `${baseURL}/tasks/${taskId}`,
      updatedTask
    );
    console.log("Tarefa atualizada:", updatedTaskResponse.data);
    
    ```
    
    Aqui, a tarefa previamente criada é atualizada com novos dados e a resposta da atualização é exibida no console.
    
6.  **Obtenção de Todas as Tarefas Após a Atualização:**
    
    ```javascript
    javascriptCopy codeconst allTasksAfterUpdateResponse = await axios.get(`${baseURL}/tasks`);
    console.log(
      "Todas as tarefas (após atualização):",
      allTasksAfterUpdateResponse.data
    );
    
    ```
    
    Após a atualização da tarefa, a função verifica novamente todas as tarefas para incluir a tarefa atualizada.
    
7.  **Exclusão de uma Tarefa:**
    
    ```javascript
    javascriptCopy codeconst deleteTaskResponse = await axios.delete(`${baseURL}/tasks/${taskId}`);
    console.log("Tarefa excluída:", deleteTaskResponse.status);
    
    ```
    
    Nesta etapa, a tarefa é excluída e o status da exclusão é exibido no console.
    
8.  **Obtenção de Todas as Tarefas Após a Exclusão:**
    
    ```javascript
    javascriptCopy codeconst allTasksAfterDeleteResponse = await axios.get(`${baseURL}/tasks`);
    console.log(
      "Todas as tarefas (após exclusão):",
      allTasksAfterDeleteResponse.data
    );
    
    ```
    
    Após a exclusão da tarefa, a função verifica novamente todas as tarefas para refletir a exclusão.
