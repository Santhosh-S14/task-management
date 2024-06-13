import { getAllTodos } from "@/db/queries";
import { Todos } from "./components/Todos";

export default async function Home() {
  const todos = await getAllTodos();
  return (
    <main className="flex max-w-4xl mx-auto min-h-screen flex-col items-center p-16">
      <h1 className="text-3xl font-medium">Task Management App</h1>
      <Todos todos={todos} />
    </main>
  );
}
