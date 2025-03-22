import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

function tasksStore(set) {
    return {
        tasks: [],
        
        addTask: function(newTask) {
            set(function(previousState) {
                return { tasks: [newTask, ...previousState.tasks] };
            });
        },

        markComplete: function(taskId) {
            set(function(previousState) {
                const updatedTasks = previousState.tasks.map(function(task) {
                    if (task.id === taskId) {
                        task.complete = true;
                        return task;
                    }
                    return task;
                });
                return { tasks: updatedTasks };
            });
        },

        markIncomplete: function(taskId) {
            set(function(previousState) {
                const updatedTasks = previousState.tasks.map(function(task) {
                    if (task.id === taskId) {
                        task.complete = false;
                        return task;
                    }
                    return task;
                });
                return { tasks: updatedTasks };
            });
        },

        deleteTask: function(taskId) {
            set(function(previousState) {
                const remainingTasks = previousState.tasks.filter(function(task) {
                    return task.id !== taskId;
                });
                return { tasks: remainingTasks };
            });
        },

        editTask: function(taskId, newTitle, newDescription, newDueDate) {
            set(function(previousState) {
                const updatedTasks = previousState.tasks.map(function(task) {
                    if (task.id === taskId) {
                        return { ...task, title: newTitle, description: newDescription, dueDate: newDueDate };
                    }
                    return task;
                });
                return { tasks: updatedTasks };
            });
        }
    };
}

const useTasksStore = create(devtools(persist(tasksStore, { name: "todo-list" })));

export default useTasksStore;
