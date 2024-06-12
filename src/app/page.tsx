import { Todos } from "./components/Todos";
import { getAllTodos } from "@/db/queries";

export default async function Home() {
  // Raw data (How would it look in the database)
  // const todos: TodoType[] = [
  //   {
  //     id: 1,
  //     title: "Do 30 minutes of yoga",
  //     description:
  //       "Yoga is a form of exercise that combines physical postures, breathing techniques, and meditation.",
  //     endDate: new Date(),
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Buy bread",
  //     description: "",
  //     endDate: new Date(),
  //     completed: false,
  //   },
  // ];
  const todos = await getAllTodos();
  return (
    <main className="bg-zinc-300 min-h-screen text-black">
      <Todos todos={todos} />
    </main>
  );
}
