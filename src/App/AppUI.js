import logo from "../platzi.webp";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { DoneList } from "../DoneList";
import { DoneCounter } from "../DoneCounter";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { DoneItem } from "../DoneItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";
import { TodoContext } from "../TodoContext";
import React from "react";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        unCompleteTodo,
        listDoneTodos,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <>
            <div className="App">
                <div className="todoDiv">
                    <TodoCounter />
                    <TodoSearch />

                    <TodoList>
                        {loading && <TodosLoading />}
                        {error && <TodosError />}
                        {!loading && searchedTodos === 0 && <TodosEmpty />}


                        {searchedTodos.map(todo => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}

                            />
                        ))}
                    </TodoList>
                </div>
                <div>
                    <DoneCounter />

                    <DoneList>
                        {listDoneTodos.map(todo => (
                            <DoneItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => unCompleteTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        ))}
                    </DoneList>


                </div>
            </div>
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    );
}

export { AppUI };