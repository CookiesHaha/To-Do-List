const API_URL = 'http://localhost:8080/tasks';

export function getTasks() {
  return fetch(API_URL)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export function createTask(newTask) {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newTask),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}

export function deleteTask(id) {
  return fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}

export function updateTask(id) {
  return fetch(`${API_URL}/${id}`, {
    method: 'PUT',
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}
