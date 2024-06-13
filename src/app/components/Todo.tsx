import { FC } from "react";
import { TodoType } from "../types/todoType";
import { Checkbox } from "@/components/ui/checkbox";
import { CircleDotDashed, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteTodo } from "@/db/queries";

interface Props {
  todo: TodoType;
}

export const Todo: FC<Props> = ({ todo }) => {
  return (
    <div className="flex items-top space-x-2 border border-gray-400 rounded-lg p-2">
      <Checkbox id={todo.title} />
      <div className="flex justify-between w-full">
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
        <div className="flex space-x-2 ml-auto">
          <Button variant={"outline"}>
            <Pencil size={20} />
          </Button>
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
