"use server";
import { revalidatePath } from "next/cache";
import { db } from "."
import { todos } from "./schema";
import { TodoType } from "@/app/types/todoType";
import { redirect } from "next/navigation";
import { and, desc, eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";

export const getAllTodos = async () => {
    const user = auth();
    if (!user.userId) throw new Error('Unauthorized');
    const allTodos = await db.query.todos.findMany({
        where: eq(todos.userId, user.userId),
        orderBy:() => desc(todos.id)
    });
    return allTodos;
}

export const addTodo = async (formData: FormData) => {
    const user = auth();
    const title = formData.get("title") as string;
    const description = formData.get("desc") as string;
    const date = formData.get("date") as string;
    const newTodo = {
        id: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
        title: title,
        description: description,
        endDate: new Date(date),
        completed: false,
        userId: user.userId,
    }
    await db.insert(todos).values(newTodo);
    revalidatePath("/");
    redirect("/");
}

export const deleteTodo = async (id: number) => {
    const user = auth();
    if (!user.userId) throw new Error('Unauthorized');
    const idToDelete = id;
    await db.delete(todos).where(and(eq(todos.id, idToDelete), eq(todos.userId, user.userId)));
    revalidatePath("/");
    redirect("/");
}

export const getTodoById = async (id: number) => {
    const user = auth();
    if (!user.userId) throw new Error('Unauthorized');
    const todo = await db.query.todos.findFirst({
        where: eq(todos.id, id)
    });
    if(!todo) throw new Error('Image not found');
    if(todo.userId !== user.userId) throw new Error('Unauthorized');
    return todo;
}

export const updateTodo = async (todo: TodoType) => {
    await db.update(todos).set(todo).where(eq(todos.id, todo.id));
    revalidatePath("/");
    redirect("/");
}

export const updateTodoCompleted = async (id: number, completed: boolean) => {
    const idToUpdate = id;
    await db.update(todos).set({
        completed: completed
    }).where(eq(todos.id, idToUpdate));
    revalidatePath("/");
    redirect("/");
}