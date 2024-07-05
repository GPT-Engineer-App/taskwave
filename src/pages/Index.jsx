import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash } from "lucide-react";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { title: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <header className="w-full p-4 bg-gray-100 border-b">
        <h1 className="text-2xl font-bold">Todoist Clone</h1>
      </header>
      <main className="flex flex-col items-center w-full p-4 space-y-4">
        <form onSubmit={addTask} className="flex w-full max-w-md space-x-2">
          <Input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow"
          />
          <Button type="submit">Add</Button>
        </form>
        <div className="w-full max-w-md space-y-2">
          {tasks.map((task, index) => (
            <Card key={index} className="flex items-center justify-between p-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTaskCompletion(index)}
                />
                <span className={task.completed ? "line-through" : ""}>
                  {task.title}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteTask(index)}
              >
                <Trash className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>
      </main>
      <footer className="w-full p-4 bg-gray-100 border-t">
        <p className="text-center">© 2023 Todoist Clone</p>
      </footer>
    </div>
  );
};

export default Index;