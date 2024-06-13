import { getAllTodos } from "@/db/queries";
import { Todos } from "./components/Todos";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const todos = await getAllTodos();
  return (
    <main className="flex max-w-4xl mx-auto min-h-screen flex-col items-center p-16">
      <h1 className="text-3xl font-medium">Todo List App</h1>
      <div className="ml-auto">
        <Link href={"/addTodo"}>
          <Button>Add a Todo</Button>
        </Link>
      </div>
      <Todos todos={todos} />
    </main>
  );
}
