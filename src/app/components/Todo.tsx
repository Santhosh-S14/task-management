"use client";
import { FC, useEffect, useState } from "react";
import { TodoType } from "../types/todoType";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, Clock, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteTodo, updateTodoCompleted } from "@/db/queries";
import Link from "next/link";

interface Props {
  todo: TodoType;
}

export const Todo: FC<Props> = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(todo.completed);
  const [endDateText, setEndDateText] = useState("");
  const handleisChecked = () => {
    setIsChecked(!isChecked);
    updateTodoCompleted(todo.id, !isChecked);
  };
  useEffect(() => {
    const calculateEndDateText = () => {
      const endDate = new Date(todo.endDate);
      const today = new Date();
      const differenceInTime = endDate.getTime() - today.getTime();
      const differenceInDays = Math.ceil(
        differenceInTime / (1000 * 60 * 60 * 24)
      );

      if (differenceInDays === 0) {
        setEndDateText("Today");
      } else if (differenceInDays === 1) {
        setEndDateText("Tomorrow");
      } else if (differenceInDays > 1) {
        setEndDateText(`${differenceInDays} days`);
      } else {
        setEndDateText(`Overdue by ${Math.abs(differenceInDays)} days`);
      }
    };

    calculateEndDateText();
  }, [todo.endDate]);
  return (
    <div className="flex items-top space-x-2 border border-gray-400 rounded-lg p-2">
      <Checkbox
        id={todo.title}
        checked={isChecked}
        onClick={handleisChecked}
        disabled={isChecked}
        className="mt-1.5"
      />
      <div className="flex justify-between w-full">
        <div className="flex flex-col space-y-3">
          <div className="flex space-x-2">
            <h2 className="text-lg font-semibold">{todo.title}</h2>
            {isChecked ? (
              <div className="flex space-x-2 items-center">
                <Check size={20} color="green" />
                <p className="text-sm font-semibold text-green-600">
                  Completed
                </p>
              </div>
            ) : (
              <div className="flex space-x-2 items-center justify-center">
                <Clock size={20} color="red" />
                <p className="text-sm font-semibold text-[#f29339]">Pending</p>
              </div>
            )}
          </div>
          {todo.description && (
            <p className="text-sm font-medium">{todo.description}</p>
          )}
          {isChecked ? (
            ""
          ) : endDateText.includes("Overdue") ? (
            <p className="text-xs text-red-500 font-light">{`${endDateText}`}</p>
          ) : (
            <p className="text-xs font-light">{`Due: ${endDateText}`}</p>
          )}
        </div>
        <div className="flex space-x-2 ml-auto">
          {!isChecked && (
            <Link href={`/editTodo/${todo.id}`}>
              <Button
                variant={"outline"}
                className="hover:bg-gray-200 transition duration-200"
              >
                <Pencil size={20} />
              </Button>
            </Link>
          )}
          <form
            action={async () => {
              await deleteTodo(todo.id);
            }}
          >
            <Button
              variant={"outline"}
              className="hover:bg-gray-200 transition duration-200"
            >
              <Trash2 size={20} color="red" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
