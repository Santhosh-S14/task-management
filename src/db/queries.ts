import { revalidatePath } from "next/cache";
import { db } from "."

export const getAllTodos = async () => {
    const allTodos = await db.query.todos.findMany();
    return allTodos;
}