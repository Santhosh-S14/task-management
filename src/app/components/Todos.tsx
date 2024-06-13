"use client";
import { FC, useState } from "react";
import { TodoType } from "../types/todoType";
import { Todo } from "./Todo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

interface TodosProps {
  todos: TodoType[];
}

export const Todos: FC<TodosProps> = ({ todos }) => {
  const [todoItems, setTodoItems] = useState<TodoType[]>(todos);
  const [filteredTodos, setFilteredTodos] = useState<TodoType[]>(todos);
  const [searchText, setSearchText] = useState("");
  return (
    <div className="w-full flex flex-col mt-8 gap-2">
      <div className="flex flex-row justify-between mt-4 items-center w-full">
        <div className="flex items-center space-x-4">
          <div className="flex flex-row items-center space-x-2 mr-4">
            <Input
              id="search"
              placeholder="Search for a task"
              type="text"
              name="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Search
              onClick={() => {
                const filteredTodos = todoItems.filter((todo) =>
                  todo.title.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredTodos(filteredTodos);
              }}
            />
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort by</SelectLabel>
                  <SelectItem value="apple">Title</SelectItem>
                  <SelectItem value="apple">End date</SelectItem>
                  <SelectItem value="apple">Status</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Link href={"/addTodo"}>
            <Button>Add a Task</Button>
          </Link>
        </div>
      </div>
      {filteredTodos.map((todo) => {
        return <Todo key={todo.title} todo={todo} />;
      })}
    </div>
  );
};
