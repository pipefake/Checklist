import React, { Component } from 'react';
import './DoneCounter.css';
import { TodoContext } from "../TodoContext";

function DoneCounter() {
    const { completedTodos, } = React.useContext(TodoContext);
    return (
        <>
            <div className='divTituloDone'>
                <h1>Hecho</h1>
                <p className='text_bold'>{completedTodos}</p>

            </div>
        </>
    );
}
export { DoneCounter };
