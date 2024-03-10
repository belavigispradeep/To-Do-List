function addTask(){
    const taskinput = document.querySelector("#newTask");
    const taskText = taskinput.value.trim();

    if(taskText !==""){
        const textList = document.querySelector("#taskList");

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        const taskTextElement = document.createElement("span");
        taskTextElement.innerText = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = function (){
            taskList.removeChild(taskElement);
        }

        taskElement.appendChild(taskTextElement);
        taskElement.appendChild(deleteBtn);
        taskList.appendChild(taskElement);

        taskinput.value = "";
    }
}