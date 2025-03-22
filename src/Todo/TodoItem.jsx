import useTasksStore from "../store/tasksStore";

function TodoItem({ id, title, description, complete }) {
    const markTaskAsComplete = useTasksStore(function (state) {
        return state.markComplete;
    });

    const markAsIncomplete = useTasksStore(function (state) {
        return state.markIncomplete;
    });

    const deleteTask = useTasksStore(function (state) {
        return state.deleteTask;
    });

    function handleMarkComplete() {
        markTaskAsComplete(id);
    }

    function handleMarkIncomplete() {
        markAsIncomplete(id);
    }

    function handleDeleteItem() {
        deleteTask(id);
    }

    return (
        <div className="todo-item">
            <h3 className={complete ? "todo-title complete" : "todo-title"}>
                {title}
            </h3>
            <p className={complete ? "complete" : ""}>{description}</p>
            <div className="todo-item_controls">
                <button className={complete ? "incomplete-btn" : "complete-btn"} onClick={complete ? handleMarkIncomplete : handleMarkComplete}>
                    {complete ? "Mark as Incomplete" : "Mark as Complete"}
                </button>
                <button className="delete-btn" onClick={handleDeleteItem}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
