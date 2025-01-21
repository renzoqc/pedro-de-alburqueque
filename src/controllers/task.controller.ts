import { Request, Response } from 'express';
import * as taskService from '../services/task.service';
import { CreateTaskDto, UpdateTaskDto } from '../dtos/task.dto';

export const getTasks = (req: Request, res: Response) => {
    const tasks = taskService.getAllTasks();
    res.status(200).json(tasks);
};

export const createTask = (req: Request, res: Response) => {
    const { title, completed } = req.body as CreateTaskDto;

    if (typeof title !== 'string' || typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Invalid data. Title must be a string and completed must be a boolean.' });
    }

    const newTask = taskService.addTask(title, completed);
    res.status(201).json(newTask);
};

export const updateTask = (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const { title, completed } = req.body as UpdateTaskDto;

    if (typeof title !== 'string' || typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Invalid data. Title must be a string and completed must be a boolean.' });
    }

    try {
        const updatedTask = taskService.updateTask(id, title, completed);
        res.status(200).json(updatedTask);
    } catch (error: any) {
        res.status(404).json({ error: error.message });
    }
};

export const deleteTask = (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);

    try {
        taskService.deleteTask(id);
        res.status(204).send();
    } catch (error: any) {
        res.status(404).json({ error: error.message });
    }
};