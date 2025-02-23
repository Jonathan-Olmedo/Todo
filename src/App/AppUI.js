import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoLoading } from "../TodoLoading";
import { TodoError } from "../TodoError";
import { EmptyTodos } from "../EmptyTodos";

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completedTodo,
    deleteTodo } 
) {
    return (
        <>
            <TodoCounter total={totalTodos} completed={completedTodos} loading={loading} error={error} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <TodoList>
                {loading && <TodoLoading/>}
                {error && <TodoError/>}
                {(!loading && searchedTodos.lenght == 0) && <EmptyTodos/>}

                {searchedTodos.map((todo) => {
                    /* otra manera de pasar eventos es con las props */
                    return (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => {
                                completedTodo(todo.text);
                            }}
                            onDelete={() => {
                                deleteTodo(todo.text);
                            }}
                        />
                    );
                })}
            </TodoList>
            <CreateTodoButton />
        </>
    );
}

export { AppUI };
