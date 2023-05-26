
import './App.css';
import React from 'react';
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";

// const deafultTodos = [
//   { text: ' Cortar cebolla', completed: false },
//   { text: ' Cortar tomates', completed: false },
//   { text: ' Cortar papa', completed: false },
//   { text: ' Cortar yuca', completed: false },
//   { text: ' Cortar pimentón', completed: false },
//   { text: ' Cortar ajo', completed: false },
// ];

// localStorage.setItem('AlmacenamientoTodos', JSON.stringify(deafultTodos));

// localStorage.removeItem('AlmacenamientoTodos');




function App() {


  const [todos, saveTodos] = useLocalStorage('AlmacenamientoTodos', []);

  const [searchValue, setSearchValue] = React.useState('');
  console.log('buscan  ' + searchValue);


  const completedTodos = todos.filter(todo => !!todo.completed).length;

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLocaleLowerCase();

    const searchText = searchValue.toLocaleLowerCase();
    const aux = todoText.includes(searchText);
    console.log(aux);
    return aux && !todo.completed;
  }
  );

  const listDoneTodos = todos.filter(todo => !!todo.completed);

  const totalTodos = todos.length;

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };



  const unCompleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = false;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      searchedTodos={searchedTodos}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      unCompleteTodo={unCompleteTodo}
      listDoneTodos={listDoneTodos}
    />
  );
}



export default App;
