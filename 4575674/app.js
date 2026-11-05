const taskInput = document.getElementById('new-task-input');
const addButton = document.getElementById('add-button');
const tasksList = document.getElementById('tasks-list');
const countDisplay = document.getElementById('task-count');

function addTask(text) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const label = document.createElement('label');
  label.append(checkbox);
  label.append(document.createTextNode(text));
  li.append(label);
  tasksList.append(li);
  updateCount();
}

function removeCompletedTasks() {
  for (let i = tasksList.children.length - 1; i >= 0; i--) {
    if (tasksList.children[i].firstChild.firstChild.checked) {
      tasksList.children[i].remove();
    }
  }
  updateCount();
}

function updateCount() {
  countDisplay.textContent = tasksList.childElementCount.toString();
}

addButton.addEventListener('click', () => handleAdd());
taskInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault(); 
    handleAdd();
  }
});

function handleAdd() {
  const value = taskInput.value.trim();
  if (!value) return;
  addTask(value); 
  taskInput.value = ''; 
}

countDisplay.parentElement.addEventListener('dblclick', removeCompletedTasks);