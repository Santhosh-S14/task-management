import { FC } from "react";
import { TodoType } from "../types/todoType";

interface Props {
  todo: TodoType;
}

export const Todo: FC<Props> = ({ todo }) => {
  return (
    <div className="flex flex-row gap-2">
      <input type="checkbox" />
      <label>{todo.title}</label>
    </div>
  );
};
