import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getTodoById } from "@/db/queries";
export default async function EditTodo({
  params: { id: todoId },
}: {
  params: { id: number };
}) {
  const todo = await getTodoById(todoId);
  console.log(todo);
  const formattedDate = todo?.endDate
    ? new Date(todo.endDate).toISOString().split("T")[0]
    : "";
  return (
    <div className="mx-auto max-w-4xl mt-16">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Edit Todo</CardTitle>
          <CardDescription>Edit any field of your task</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Title of your task"
                  type="text"
                  name="title"
                  value={todo?.title}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="desc">Description</Label>
                <Input
                  id="desc"
                  placeholder="Description of your task"
                  type="text"
                  name="desc"
                  value={todo?.description}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  placeholder="End date of your task"
                  type="date"
                  name="date"
                  value={formattedDate}
                />
              </div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
