var todos = ['item 1', 'item 2', 'item 3']

// It should have a function to display Todos
function displayTodos() {
  console.log('My Todos:', todos);
}

// It should have a function to add Todos
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

// It should have a function to change Todos
function changeTodo(position, newValue) {
  todos [position] = newValue;
  displayTodos();
}

// It should have a function to delete Todos
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
