import { TodoType } from "@/types/todo.type";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const addToLocal = (item: TodoType[]) => {
  localStorage.setItem("todo", JSON.stringify(item));
};
