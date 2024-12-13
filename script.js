const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;

  taskList.appendChild(taskItem);

 
  taskInput.value = '';


  const deleteBtn = taskItem.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function () {
    taskList.removeChild(taskItem);
  });

 
  const editBtn = taskItem.querySelector('.edit-btn');
  editBtn.addEventListener('click', function () {
    const taskTextElement = taskItem.querySelector('.task-text');
    const currentText = taskTextElement.textContent;
    const newText = prompt('Edit your task:', currentText);

    if (newText === null || newText.trim() === '') {
      alert('Task cannot be empty!');
      return;
    }

    taskTextElement.textContent = newText.trim();
  });
});
