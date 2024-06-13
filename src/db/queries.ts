"use server";
import { revalidatePath } from "next/cache";
import { db } from "."
import { todos } from "./schema";
import { TodoType } from "@/app/types/todoType";
import { redirect } from "next/navigation";

export const getAllTodos = async () => {
    const allTodos = await db.query.todos.findMany();
    return allTodos;
}

export const addTodo = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const description = formData.get("desc") as string;
    const date = formData.get("date") as string;
    const newTodo: TodoType = {
        title: title,
        description: description,
        endDate: new Date(date),
        completed: false,
    }
    await db.insert(todos).values(newTodo);
    revalidatePath("/");
    redirect("/");
}