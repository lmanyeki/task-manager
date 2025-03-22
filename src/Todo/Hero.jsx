import TodoInput from "./TodoInput";
import now from "../utils/now";
import useTasksStore from "../store/tasksStore";
import "./Todo.css";

function Hero() {
    const tasks = useTasksStore(state => state.tasks);
    let numberOfIncompleteTasks = 0;
    tasks.forEach(function(task) {
        if (task.complete === false) numberOfIncompleteTasks++;
    })
    return (
        <section className="hero">
            <h3>Guten {now()} Lydiah</h3>
            <h2>You have {numberOfIncompleteTasks} tasks left today</h2>
            <TodoInput />
        </section>
    );
};
export default Hero;