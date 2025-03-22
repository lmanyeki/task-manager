import useTasksStore from "../store/tasksStore";
import TodoItem from "./TodoItem";
import "./Todo.css";

function TodoItems() {
    const tasks = useTasksStore((state) => state.tasks);
    
    return (
        <section className="todo-items-container">
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    dueDate={task.dueDate}
                    complete={task.complete}
                />
            ))}
        </section>
    );
}

export default TodoItems;
