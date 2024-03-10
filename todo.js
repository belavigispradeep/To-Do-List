function addTask(){
    const taskinput = document.querySelector("#newTask");
    const taskText = taskinput.value.trim();

    if(taskText !==""){
        const textList = document.querySelector("#taskList");

        //create new task element;
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        //create task text;
        const taskTextElement = document.createElement("span");
        taskTextElement.innerText = taskText;

        //create Delete button;
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = function (){
            taskList.removeChild(taskElement);
        }

        //Append elements to the task container;
        taskElement.appendChild(taskTextElement);
        taskElement.appendChild(deleteBtn);

        //Append the task container to the task list;
        taskList.appendChild(taskElement);

        //Clear input field;
        taskinput.value = "";
    }
}