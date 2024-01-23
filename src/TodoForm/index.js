import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState({
        text: '',
        time: '',
    });

    const onSubmit = (event) => {
        event.preventDefault();

        // Obtener la hora actual
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


        // Crear un nuevo todo con el texto y la hora
        const newTodo = {
            text: newTodoValue.text,
            time: currentTime,
        };

        // Agregar el nuevo todo al contexto
        addTodo(newTodo);

        // Cerrar el modal
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue({
            ...newTodoValue,
            text: event.target.value,
        });
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit} className='modaldsg'>
            <label>¿Algo nuevo para hacer?</label>
            <textarea
                value={newTodoValue.text}
                onChange={onChange}
                className='todoTextarea'
                placeholder='Escribe algo'
            />
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                    className='TodoForm-button TodoForm-button-cancel'
                >
                    ✘
                </button>
                <button
                    type="submit"
                    className='TodoForm-button TodoForm-button-add'
                >
                    ✔
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
