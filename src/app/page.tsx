import { getAllTodos } from "@/db/queries";
import { Todos } from "./components/Todos";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function GetTodos() {
  const todos = await getAllTodos();
  return (
    <>
      <h1 className="text-4xl font-bold">Your tasks</h1>
      <div className="mt-4 ml-auto">
        <Link href={"/addTodo"}>
          <Button>Add a Task</Button>
        </Link>
      </div>
      <Todos todos={todos} />
    </>
  );
}

export default async function Home() {
  return (
    <main className="flex max-w-4xl mx-auto min-h-screen flex-col items-center p-16">
      <SignedOut>
        <h1 className="text-center text-2xl">
          Please sign in above to view tasks
        </h1>
      </SignedOut>
      <SignedIn>
        <GetTodos />
      </SignedIn>
    </main>
  );
}
