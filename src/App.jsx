import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import React from "react";

export default function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}
