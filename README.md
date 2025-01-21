# Task Management API

This project is a simple RESTful API built with Node.js, TypeScript, and Express for managing a list of tasks. The API uses in-memory storage to handle task data.

## Features

- Retrieve all tasks
- Create a new task
- Update an existing task by ID
- Delete a task by ID

## Project Structure

```plaintext
src/
├── controllers/        # Contains route handler logic
├── dto/                # Defines Data Transfer Objects (DTOs)
├── services/           # Implements business logic for task management
├── database/           # Stores in-memory data
├── interfaces/         # Defines TypeScript interfaces
├── routes/             # Defines API routes
└── index.ts            # Main entry point for the application
