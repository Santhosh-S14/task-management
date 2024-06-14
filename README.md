# Task Management Application

The application allows users to manage tasks with features such as creating, editing, deleting, and listing tasks, along with tasks user wise. Built with Next.js 14 App Router, TypeScript, React, Tailwind, Drizzle ORM, PostgreSQL

## Table of contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [.env files](#env-files)
- [Features and TODOs](#features-and-todos)
- [Frontend and UI](#frontend-and-ui)
- [Database and ORMs](#database-and-orms)
- [API and Server Actions](#api/server-actions)

## Prerequisites

(be sure to check for these)

```
Node.js v.18.3.17+=
```

everything else should be covered from just running `$ npm i`

## Getting Started

Clone the repository

```base
$ git clone https://github.com/Santhosh-S14/task-management.git
```

Make sure to run this command to install dependencies:

```bash
$ npm install
```

Then, run the development server:

```bash
$ npm run dev
# or
$ yarn dev
# or
$ pnpm dev
# or
$ bun dev
```

## Env files

Open your `.env.example` file. It should look like this:

```
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NO_SSL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

Make a new `.env` file by copying everything from `.env.example`

## Assumptions
After a task is marked as completed I removed the edit button and also the end date text

## Limitations
No Admin user
No Unit tests

## Code structure and design choice

1. I chose Next.js because it comes with built-in routing and API routes which makes it easier to connect a database, use server actions for API calls and simplify the development process.
2. Server actions allows for a cleaner and more maintainable code by separating concerns. 
3. TypeScript and Drizzle for an application and database be type-safe. Drizzle also provides simple and flexible API for database operations
4. Tailwind CSS for an responsive UI development, makes a seamless developer experience.
5. Code strcuture
```
components - contains resuauble components with specific piece of functionality
components/ui in the parent folder - contains UI components such as button, label, input, select etc
db - contains the schema and queries file
addTodo and editTodo folders are endpoints displaying the whole page
types - contains custom type that the user needs in the application
```

## Frontend and UI

Just a React/Next.js + TypeScript, TailwindCSS, shadcn/ui application bootstrapped by `create-next-app`

## Database and ORMs

Data is very minimal right now on the DB.

ORM of choice will be Drizzle, `$ npx drizzle-kit push` would be the usual workflow whenever you are changing the model inside `schema.prisma`.

If you want to see how the database is looking like, you can use `$ npx drizzle-kit studio`, it will boot up the studio at `[localhost:5555](https://local.drizzle.studio/)` and you can go and see the db.

## Features
- [x] Create Task
- [x] Delete Task
- [x] List Tasks
- [x] Edit task
- [x] User permission
  - [x] Owner: Can only manage their own tasks
- [x] Search functionality - Users can search for tasks by Title
- [x] Task Sorting - Allowed users to sort based on title, end date and status
- [x] Tasks with past due date - Once the task is past due date, the status changes to Overdue with red colored text and also shows the number of days the task has been in Overdue.


