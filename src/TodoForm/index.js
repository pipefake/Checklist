import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';



function TodoForm() {
    const { addTodo,
        setOpenModal, } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = (event) => {
        setOpenModal(false);
    };
    return (
        <form onSubmit={onSubmit}
            className='modaldsg'>
            <label>¿Algo nuevo para hacer?</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                className='todoTextarea' placeholder='escribe algo' />
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                    className='TodoForm-button  TodoForm-button-cancel'>✘
                </button>
                <button
                    type="submit"
                    className='TodoForm-button TodoForm-button-add'>✔
                </button>
            </div>
        </form >
    )
}

export { TodoForm };