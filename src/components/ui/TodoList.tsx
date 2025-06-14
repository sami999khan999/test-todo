import { cn } from "@/lib/utils";
import { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { context } from "../layout/Context";
import { TodoType } from "@/types/todo.type";

const TodoList = () => {
  const todoContext = useContext(context);
  const [itemToUpdate, setTodoToUpdate] = useState<number | null>();
  const [updateTodo, setUpdateTodo] = useState("");

  if (!todoContext) {
    console.error("Context doesn't exists");
  }

  const deleteHanlder = (index: number) => {
    const newTodo = todoContext.todo?.filter((_, i) => i !== index);
    todoContext.setTodo((prev) => newTodo);
  };

  const handelUpdate = () => {
    const newTodo = todoContext.todo?.map((item: TodoType, i) => {
      const newItem =
        i === itemToUpdate
          ? { details: updateTodo, checked: item.checked }
          : item;

      console.log(newItem);

      return newItem;
    });

    todoContext.setTodo(newTodo);
    setTodoToUpdate(null);
  };

  const handelCheck = (index: number) => {
    const newTodo = todoContext.todo?.map((item: TodoType, i) => {
      const newItem =
        i === index ? { details: item.details, checked: !item.checked } : item;

      console.log(newItem);

      return newItem;
    });

    todoContext.setTodo(newTodo);
    setTodoToUpdate(null);
  };

  return (
    <div className="space-y-2">
      {todoContext?.todo?.map((item, i) => (
        <div
          className={cn(
            "border border-gray-300 rounded-sm py-2 px-4 flex justify-between items-center",
            {
              "line-through": item.checked,
            }
          )}
        >
          {itemToUpdate === i ? (
            <div className="flex items-center gap-2">
              <input
                className="border px-2 rounded-xs"
                value={updateTodo}
                onChange={(e) => setUpdateTodo(e.target.value)}
              />
              <TiTick onClick={handelUpdate} />
            </div>
          ) : (
            <div onClick={() => handelCheck(i)}>{item.details}</div>
          )}
          <div className="flex items-center gap-2">
            <MdDelete onClick={() => deleteHanlder(i)} />

            <FaEdit
              onClick={(e) => {
                setTodoToUpdate(i);
                setUpdateTodo(item.details);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
