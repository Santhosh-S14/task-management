"use client";
import { FC, useState } from "react";
import { TodoType } from "../types/todoType";
import { Todo } from "./Todo";

interface TodosProps {
  todos: TodoType[];
}

export const Todos: FC<TodosProps> = ({ todos }) => {
  const [todoItems, setTodoItems] = useState<TodoType[]>(todos);
  return (
    <div className="w-full flex flex-col mt-8 gap-2">
      {todoItems.map((todo) => {
        return <Todo key={todo.title} todo={todo} />;
      })}
    </div>
  );
};
