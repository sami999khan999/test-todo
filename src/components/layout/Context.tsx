"use client";

import { TodoContext, TodoType } from "@/types/todo.type";
import React, { createContext, useEffect, useState } from "react";

export const context = createContext<TodoContext>([] as any);

const Context = ({ children }: { children: React.ReactNode }) => {
  const [todo, setTodo] = useState<TodoType[]>();

  useEffect(() => {
    const todoFromLocal = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo")!)
      : [];

    setTodo(todoFromLocal);
  }, []);

  return (
    <context.Provider value={{ todo, setTodo }}>{children}</context.Provider>
  );
};

export default Context;
