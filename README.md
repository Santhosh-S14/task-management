# Task Management Application

The application allows users to manage tasks with features such as creating, editing, deleting, and listing tasks, along with tasks user wise. 

## Features
- [ ] Create Task
- [ ] Delete Task
- [ ] List Tasks
- [ ] Edit task
- [ ] User permission
  - [ ] Owner: Can only manage their own tasks
- [ ] Search functionality - Users can search for tasks by Title
- [ ] Task Sorting - Allowed users to sort based on title, end date and status
- [ ] Tasks with past due date - Once the task is past due date, the status changes to Overdue with red colored text and also shows the number of days the task has been in Overdue.

## Instructions to set up and run the project locally

1. Clone the repository: 
```bash
git clone (https://github.com/Santhosh-S14/task-management.git)
cd task-management
```
2. Install dependencies
```bash
npm install --legacy-peer-deps
```
3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. Assumptions or Limitations 
  1. Assumptions
     1. When a task is marked as completed,
        1. Removed edit button
        2. Not showing the end date value
  2. Limitations
     1. No Admin user
     2. No Unit tests
