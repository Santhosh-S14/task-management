import { TodoType } from "./types/todoType";
import { Todos } from "./components/Todos";

export default function Home() {
  const todos: TodoType[] = [
    {
      id: 1,
      title: "Do 30 minutes of yoga",
      description:
        "Yoga is a form of exercise that combines physical postures, breathing techniques, and meditation.",
      endDate: new Date(),
      completed: false,
    },
    {
      id: 2,
      title: "Buy bread",
      description: "",
      endDate: new Date(),
      completed: false,
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-300 text-black">
      <Todos todos={todos} />
    </main>
  );
}
