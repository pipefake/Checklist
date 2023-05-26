import React, { Component } from 'react';
import './TodoCounter.css';



function TodoCounter({ total, completed }) {
  return (
    < >
      <div className='divTitulo'>
        <h1>Para Hacer</h1>
        <p className='text_bold weigthfont'>{total} / {completed}</p>
      </div>

    </>
  );
}

export { TodoCounter };
