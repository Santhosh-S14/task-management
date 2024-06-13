"use client";
import { TodoType } from "@/app/types/todoType";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getTodoById, updateTodo } from "@/db/queries";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function EditTodo({
  params: { id: todoId },
}: Readonly<{
  params: { id: number };
}>) {
  const [todo, setTodo] = useState<TodoType>();
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    date: "",
  });
  const router = useRouter();
  useEffect(() => {
    async function fetchTodo() {
      const todoData = await getTodoById(todoId);
      setTodo(todoData);
      setFormValues({
        title: todoData?.title ?? "",
        description: todoData?.description ?? "",
        date: todoData?.endDate.toISOString().split("T")[0] ?? "",
      });
    }
    fetchTodo();
  }, [todoId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      const updatedTodo = {
        ...todo,
        title: formValues.title,
        description: formValues.description,
        endDate: new Date(formValues.date),
      };
      await updateTodo(updatedTodo);
      router.push("/");
    }
  };

  return (
    <div className="mx-auto max-w-4xl mt-16">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Edit Todo</CardTitle>
          <CardDescription>Edit any field of your task</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Title of your task"
                  type="text"
                  name="title"
                  value={formValues.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="desc">Description</Label>
                <Input
                  id="desc"
                  placeholder="Description of your task"
                  type="text"
                  name="desc"
                  value={formValues.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  placeholder="End date of your task"
                  type="date"
                  name="date"
                  value={formValues.date}
                  onChange={handleInputChange}
                />
              </div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
