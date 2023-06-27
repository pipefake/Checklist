import React, { Component } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';



function TodoCounter({ total, completed }) {
  const { completedTodos, totalTodos, } = React.useContext(TodoContext);

  return (
    < >
      <div className='divTitulo'>
        <h1>Para Hacer</h1>
        <p className='text_bold weigthfont'>{totalTodos} / {completedTodos}</p>
      </div>

    </>
  );
}

export { TodoCounter };
