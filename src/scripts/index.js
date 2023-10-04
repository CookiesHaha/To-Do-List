import '../styles/todo-lists.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { renderCompetedList, renderTodoList } from './renderTaskList';
import { createTask, deleteTask, getTasks, updateTask } from './api';
import { hideErrorMsg, showErrorMsg } from './errorMsg';

let taskList = {};

getTasks().then((data) => {
  taskList = data;
  renderTodoList(taskList);
  renderCompetedList(taskList);
});

const addBtn = document.getElementById('add-todo');
const inputEl = document.getElementById('todo-input');

function clearInputValue() {
  inputEl.value = '';
}

function addTask(inputValue) {
  const newTask = {
    name: inputValue,
    completed: false,
  };
  createTask(newTask).then((task) => {
    taskList.push(task);
    renderTodoList(taskList);
    clearInputValue();
    hideErrorMsg();
  });
}

function addBtnClickHandler() {
  const inputValue = inputEl.value.trim();
  if (inputValue) {
    addTask(inputValue);
  } else {
    showErrorMsg();
  }
}

addBtn.addEventListener('click', addBtnClickHandler);

function deleteBtnHandler(event) {
  if (event.target.matches('.bi-trash')) {
    const id = event.target.getAttribute('data-id');
    deleteTask(id).then(() => {
      const task = taskList.filter((el) => el.id === id);
      taskList.splice(taskList.indexOf(task), 1);
      renderTodoList(taskList);
      renderCompetedList(taskList);
    });
  }
}

document.addEventListener('click', deleteBtnHandler);

function checkedBoxHandler(event) {
  if (event.target.matches('.input-checkbox')) {
    const id = event.target.getAttribute('data-id');
    updateTask(id).then(() => {
      taskList = taskList.map((task) => {
        if (task.id === parseInt(id, 10)) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      renderTodoList(taskList);
      renderCompetedList(taskList);
    });
  }
}

document.addEventListener('click', checkedBoxHandler);
