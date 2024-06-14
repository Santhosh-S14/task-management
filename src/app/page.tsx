import { getAllTodos } from "@/db/queries";
import { Todos } from "./components/Todos";
import { SignedIn, SignedOut } from "@clerk/nextjs";

async function GetTodos() {
  const todos = await getAllTodos();
  return (
    <>
      <h1 className="text-3xl font-medium">Your tasks</h1>
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
