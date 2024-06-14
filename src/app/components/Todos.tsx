"use client";
import { FC, useEffect, useState } from "react";
import { TodoType } from "../types/todoType";
import { Todo } from "./Todo";
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
  const [sortOption, setSortOption] = useState("");
  const handleSortOptionChange = (value: string) => {
    setSortOption(value);
  };
  useEffect(() => {
    let sortedArray = [...todos];
    if (sortOption === "title") {
      sortedArray.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "endDate") {
      sortedArray.sort(
        (a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime()
      );
    } else if (sortOption === "status") {
      sortedArray.sort((a, b) =>
        a.completed === b.completed ? 0 : a.completed ? 1 : -1
      );
    }
    setTodoItems(sortedArray);
    setFilteredTodos(sortedArray);
  }, [sortOption, todos]);
  if (filteredTodos.length === 0) {
    return (
      <div className="mt-8 text-base font-semibold border border-gray-400 rounded-lg p-2 ml-auto w-full text-center">
        Add tasks to your list to see them here
      </div>
    );
  }
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
            <Select value={sortOption} onValueChange={handleSortOptionChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort by</SelectLabel>
                  <SelectItem value="empty"></SelectItem>
                  <SelectItem value="title">Title</SelectItem>
                  <SelectItem value="endDate">End date</SelectItem>
                  <SelectItem value="status">Status</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      {filteredTodos.map((todo) => {
        return <Todo key={todo.title} todo={todo} />;
      })}
    </div>
  );
};
