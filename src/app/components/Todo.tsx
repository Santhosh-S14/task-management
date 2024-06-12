import { FC } from "react";
import { TodoType } from "../types/todoType";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  todo: TodoType;
}

export const Todo: FC<Props> = ({ todo }) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={todo.title} />
      <label
        htmlFor={todo.title}
        className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {todo.title}
      </label>
    </div>
  );
};
