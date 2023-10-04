const todoListContainer = document.getElementById('todo-lists');
const completedListContainer = document.getElementById('completed-lists');

function getTaskListHtml(tasks, isCompleted) {
  return tasks
    .filter((task) => task.completed === isCompleted)
    .reverse()
    .map(
      (task) =>
        `<li>
            <input 
            id=${task.id} 
            class="input-checkbox" 
            data-id=${task.id} 
            type="checkbox" 
            ${isCompleted ? 'checked' : ''}
            />
            <label> ${task.name} </label>
            <i class="bi-trash" data-id=${task.id}></i>
       </li>`
    )
    .join('');
}

export function renderTodoList(tasks) {
  todoListContainer.innerHTML = getTaskListHtml(tasks, false);
}

export function renderCompetedList(tasks) {
  completedListContainer.innerHTML = getTaskListHtml(tasks, true);
}
