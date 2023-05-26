import logo from "../platzi.webp";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { DoneList } from "../DoneList";
import { DoneCounter } from "../DoneCounter";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { DoneItem } from "../DoneItem";
function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    searchedTodos,
    setSearchValue,
    completeTodo,
    deleteTodo,
    unCompleteTodo,
    listDoneTodos,
}) {
    return (
        <>
            <div className="App">
                <TodoCounter completed={completedTodos} total={totalTodos} />
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

                <TodoList>
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



                <DoneCounter completed={completedTodos} />
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
                <div className="flotante">
                    {<CreateTodoButton />}
                </div>

            </div>
        </>
    );
}



export { AppUI };