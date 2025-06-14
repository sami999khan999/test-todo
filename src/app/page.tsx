"use client";

import { context } from "@/components/layout/Context";
import Title from "@/components/ui/Title";
import TodoList from "@/components/ui/TodoList";
import { addToLocal } from "@/lib/utils";
import { TodoType } from "@/types/todo.type";
import { Plus } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";

const page = () => {
  const [todoInput, setTodoInput] = useState("");
  const todoContext = useContext(context);

  if (!todoContext) {
    console.error("Context doesn't exists");
  }

  const handelAddTodo = () => {
    if (todoInput !== "") {
      todoContext.setTodo((prev) => [
        ...(prev as TodoType[]),
        { checked: false, details: todoInput },
      ]);

      setTodoInput("");

      // addToLocal(todoC);
    }
  };

  return (
    <div className="mt-[5rem] mx-auto lg:w-[50%]">
      <div className="mx-auto w-full space-y-5">
        <Title>Your Todo List</Title>
        <div className="flex items-center gap-3 w-full">
          <input
            className="border-b border-border w-full px-3 outline-0"
            placeholder="Add an task"
            value={todoInput}
            type="text"
            name="todoinput"
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <Plus
            size={20}
            className="bg-foreground text-muted rounded-xs p-0.5"
            onClick={handelAddTodo}
          />
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default page;
