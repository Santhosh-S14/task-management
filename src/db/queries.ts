"use server";
import { revalidatePath } from "next/cache";
import { db } from "."
import { todos } from "./schema";
import { TodoType } from "@/app/types/todoType";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

export const getAllTodos = async () => {
    const allTodos = await db.query.todos.findMany();
    return allTodos;
}

export const addTodo = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const description = formData.get("desc") as string;
    const date = formData.get("date") as string;
    const newTodo: TodoType = {
        id: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
        title: title,
        description: description,
        endDate: new Date(date),
        completed: false,
    }
    await db.insert(todos).values(newTodo);
    revalidatePath("/");
    redirect("/");
}

export const deleteTodo = async (id: number) => {
    const idToDelete = id;
    await db.delete(todos).where(eq(todos.id, idToDelete));
    revalidatePath("/");
    redirect("/");
}

export const getTodoById = async (id: number) => {
    const todo = await db.query.todos.findFirst({
        where: eq(todos.id, id)
    });
    return todo;
}