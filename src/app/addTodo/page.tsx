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
import { addTodo } from "@/db/queries";
export default function AddTodo() {
  return (
    <div className="mx-auto max-w-4xl mt-16">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Create Todo</CardTitle>
          <CardDescription>Add a task with just one click</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={addTodo}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Title of your task"
                  type="text"
                  name="title"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="desc">Description</Label>
                <Input
                  id="desc"
                  placeholder="Description of your task"
                  type="text"
                  name="desc"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  placeholder="End date of your task"
                  type="date"
                  name="date"
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
