import useTasksStore from "../store/tasksStore";

function TodoItem({title, description, complete }) {
    const markTaskAsComplete = useTasksStore(function(state) {
        return state.markComplete
    })

    const markAsInComplete = useTasksStore(function(state) {
        return state.markIncomplete;
    })

    const deleteTask = useTasksStore(function(state) {
        return state.deleteTask;
    })

    function handleMarkComplete() {
        markTaskAsComplete(id)
    }

    function handleMarkIncomplete() {
        markAsInComplete(id);
    }

    function handleDeleteItem() {
        deleteTask(id);
    }

    return (
    <div className="todo-item">
        <h3 className={complete ? `todo-title complete` : `todo-title`}>
            {title}
        </h3>
        <p className={complete ? `complete` : ``}>{description}</p>
        <div className="todo-item_controls">
            <button onClick={complete ? handleMarkIncomplete : handleMarkComplete}>
                { complete ? "mark as incomplete": "mark as complete"}
            </button>
            <button className="delete-btn" onClick={handleDeleteTask}>delete</button>
        </div>
    </div>
  );
};

export default TodoItem;
