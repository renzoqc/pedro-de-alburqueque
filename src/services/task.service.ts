import {tasks} from "../database";
import {Task} from "../interfaces/task.interface";

export const getAllTasks = (): Task[] => tasks;

export const addTask = (title: string, completed: boolean): Task => {
    const newTask: Task = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        title,
        completed,
    };
    tasks.push(newTask);
    return newTask;
};

export const updateTask = (id: number, title: string, completed: boolean): Task => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) throw new Error('Task not found.');

    tasks[taskIndex] = { id, title, completed };
    return tasks[taskIndex];
};

export const deleteTask = (id: number): void => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) throw new Error('Task not found.');

    tasks.splice(taskIndex, 1);
};