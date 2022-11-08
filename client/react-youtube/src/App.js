import { func } from 'prop-types';
import React from 'react';
import TodoList from './Todo/TodoList';
import Contex from './contex';

function App() {

  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Купить хлеб' },
    { id: 2, completed: true, title: 'Купить масло' },
    { id: 3, completed: false, title: 'Купить молоко' },
  ])


  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
  }

  function removeTodo(id) {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  return (
    <Contex.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>React</h1>

        {todos.length ? (<TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No todos</p>
        )}
      </div>
    </Contex.Provider>
  );
}

export default App;
