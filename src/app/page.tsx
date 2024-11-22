"use client";

import { useState } from "react";
import Image from "next/image";
import "@/app/page.css";

export default function TodoApp() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index: number) => {
    setTasks(
      tasks.filter((_, i) => {
        return i !== index;
      })
    );
  };

  return (
    <>
      <div className="todoApp">
        <h1>Todo App by Muhammad Ahmad</h1>

        <div className="todoText">
          <input
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            placeholder="Enter a task"
            className="todoInput"
          />
          <button className="todoButton" onClick={handleAddTask}>
            &#43;
          </button>
        </div>
      </div>

      <div className="output">
        <ul>
          {tasks.map((t, index) => {
            return (
              <li key={index}>
                {t}
                <button
                  className="deleteButton"
                  onClick={() => {
                    handleDeleteTask(index);
                  }}
                >
                  <Image
                    src="/vector.svg"
                    alt="delete"
                    height={350}
                    width={350}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
