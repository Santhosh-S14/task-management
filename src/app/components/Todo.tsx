"use client";
import { FC, useState } from "react";
import { TodoType } from "../types/todoType";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, CircleDotDashed, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteTodo } from "@/db/queries";
import Link from "next/link";

interface Props {
  todo: TodoType;
}

export const Todo: FC<Props> = ({ todo }) => {
  const [isChecked, setisChecked] = useState(todo.completed);
  const handleisChecked = () => {
    setisChecked(!isChecked);
  };
  return (
    <div className="flex items-top space-x-2 border border-gray-400 rounded-lg p-2">
      <Checkbox
        id={todo.title}
        checked={isChecked}
        onClick={handleisChecked}
        disabled={isChecked}
      />
      <div className="flex justify-between w-full">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <label
              htmlFor={todo.title}
              className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {todo.title}
            </label>
            {isChecked ? (
              <div className="flex space-x-2 items-center justify-center">
                <Check size={20} color="green" />
                <p className="text-sm font-semibold text-green-600">
                  Completed
                </p>
              </div>
            ) : (
              <div className="flex space-x-2 items-center justify-center">
                <CircleDotDashed size={20} color="red" />
                <p className="text-sm font-semibold text-yellow-600">Pending</p>
              </div>
            )}
          </div>
          <p className="text-sm">{todo.description}</p>
          <p className="text-xs">{`End date: ${todo.endDate}`}</p>
        </div>
        <div className="flex space-x-2 ml-auto">
          {!isChecked && (
            <Link href={`/editTodo/${todo.id}`}>
              <Button variant={"outline"}>
                <Pencil size={20} />
              </Button>
            </Link>
          )}
          <form
            action={async () => {
              await deleteTodo(todo.id);
            }}
          >
            <Button variant={"outline"}>
              <Trash2 size={20} color="red" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
