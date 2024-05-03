const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const saveTodoButton=document.getElementById('savebutton');


addBtn.addEventListener('click', function()  {
    if(taskInput.value === ""){ 
        alert("Enter valid input");
        taskList.removeChild(delete-btn);
    }
        const taskText = taskInput.value;
        const divContainer=document.createElement('div');
        const listItem = document.createElement("li");
        const button=document.createElement('button');
        divContainer.appendChild(listItem);
        divContainer.appendChild(button);
        divContainer.classList.add('divContainer');
        button.classList.add('delete-btn');
        listItem.classList.add('listItemStyle');
        listItem.textContent =taskText;
        button.textContent="delete";
        taskList.appendChild(divContainer);
        taskInput.value = ""; 
        listItem.addEventListener('click',function() {
            listItem.style.textDecoration='line-through';
            button.style.textDecoration='line-through';
        })
        button.addEventListener('click',function() {
            taskList.removeChild(divContainer);
        })
                              
});



