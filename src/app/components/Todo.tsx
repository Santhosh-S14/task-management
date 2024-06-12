import { FC } from "react";
import { TodoType } from "../types/todoType";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  todo: TodoType;
}

export const Todo: FC<Props> = ({ todo }) => {
  return (
    <div className="flex items-top space-x-2 border border-gray-400 rounded-lg p-2">
      <Checkbox id={todo.title} />
      <div className="flex flex-col space-y-2">
        <label
          htmlFor={todo.title}
          className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {todo.title}
        </label>
        <p className="text-sm">{todo.description}</p>
      </div>
    </div>
  );
};
