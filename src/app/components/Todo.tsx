import { FC } from "react";
import { TodoType } from "../types/todoType";
import { Checkbox } from "@/components/ui/checkbox";
import { CircleDotDashed } from "lucide-react";

interface Props {
  todo: TodoType;
}

export const Todo: FC<Props> = ({ todo }) => {
  return (
    <div className="flex items-top space-x-2 border border-gray-400 rounded-lg p-2">
      <Checkbox id={todo.title} />
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-2">
          <label
            htmlFor={todo.title}
            className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {todo.title}
          </label>
          <div className="flex space-x-2 items-center justify-center">
            <CircleDotDashed size={20} color="red" />
            <p className="text-sm font-semibold text-yellow-600">Pending</p>
          </div>
        </div>
        <p className="text-sm">{todo.description}</p>
        <p className="text-xs">{`End date: ${todo.endDate}`}</p>
      </div>
    </div>
  );
};
