import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTasksStore from "../store/tasksStore";
import "./Todo.css";

function TodoInput() {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [dueDate, setDueDate] = useState(""); 
    const addNewTask = useTasksStore((state) => state.addTask);

    function handleAddTask(e) {
        e.preventDefault();
        if (!taskTitle) {
            toast.error("Please supply a task title");
            return;
        }
        if (!taskDescription) {
            toast.error("Please supply a task description");
            return;
        }
        if (!dueDate) {
            toast.error("Please set a due date");
            return;
        }

        const newTask = {
            id: Math.random() * 1_000_000_000_000,
            title: taskTitle,
            description: taskDescription,
            dueDate, 
            complete: false
        };
        addNewTask(newTask);
        setTaskTitle("");
        setTaskDescription("");
        setDueDate(""); 
        toast.success("Task added successfully!");
    }

    return (
        <>
        <form className="todo-input-form">
            <input
              type="text"
              placeholder="Enter task title"
              className="todo-text-input"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <textarea
              placeholder="Enter task description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            ></textarea>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="todo-date-input"
            />
            <button className="submit-btn" onClick={handleAddTask}>Add Todo</button>
        </form>
        <ToastContainer />
        </>
    );
};

export default TodoInput;
