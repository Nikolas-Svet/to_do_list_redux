export function saveTasksToLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

export function getTasksFromLocalStorage() {
  const tasks = localStorage.getItem('tasks')
  return tasks ? JSON.parse(tasks) : []
}

export function generateUniqueId() {
  return '_' + Math.random().toString(36).substring(2, 9)
}