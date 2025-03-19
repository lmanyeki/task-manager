import useTasksStore from "../store/tasksStore";
import TodoItem from "./TodoItem";

function TodoItems() {
    const tasks = useTasksStore(function(state) {
        return state.tasks;
    });
    
    return (
    <section className="todo-items-container">
        {
        tasks.map((task) => <TodoItem title={tasks.title} description={task.description} complete={task.complete} key={task.id} id={task.id}/>)}
    </section>
    );
}

export default TodoItems;
