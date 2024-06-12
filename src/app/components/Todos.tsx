"use client";
import { FC, useState } from "react";
import { TodoType } from "../types/todoType";
import { Todo } from "./Todo";

interface TodosProps {
  todos: TodoType[];
}

export const Todos: FC<TodosProps> = ({ todos }) => {
  const [todoItems, setTodoItems] = useState(todos);
  return (
    <main className="flex w-full min-h-screen flex-col items-center p-16">
      <div className="text-5xl font-medium">All Todos</div>
      <div className="w-full flex flex-col mt-8 gap-2">
        {todoItems.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </div>
    </main>
  );
};
