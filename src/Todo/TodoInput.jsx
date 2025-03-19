import { useState } from "react";
import useTasksStore from "../store/tasksStore";

const TodoInput = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const addNewTask = useTasksStore(function(state) {
        return state.addTask
    })
    function handleAddTask(e) {
        e.preventDefault();
        if (!taskTitle) {
            alert("Please supply a task title");
            return; 
        }
        if (!taskDescription) {
            alert("Please supply a task description");
            return;
        }
        const newTask = {
            id: Math.random() * 1_000_000_000_000,
            title: taskTitle,
            description: taskDescription,
            complete: false
        }
        addNewTask(newTask);
        setTaskTitle("");
        setTaskDescription("");
    }
    return (
        <form className="todo-input-form">
            <input
              type="text"
              placeholder="enter task title"
              className="todo-text-input"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <textarea
             placeholder="enter todo description"
             value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
             ></textarea>
            <button className="submit-btn" onClick={handleAddTask}>Add todo</button>
        </form>
    );

};
export default TodoInput;