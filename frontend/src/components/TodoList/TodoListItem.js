import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

import {
  patchTodoAction,
  removeTodoAction,
} from "../../store/slices/todoSlice";

import TodoModal from "../TodoModal/TodoModal";

import classes from "./TodoListItem.module.css";
import RoundCheckBox from "../../UI/RoundCheckBox";
import EditTodoModal from "../EditTodoModal/EditTodoModal";

const TodoListItem = ({ todo }) => {
  const [isModalOppened, setModalOppened] = useState(false);
  const [isEditModalOppened, setEditModalOppened] = useState(false);
  const [isCompleted, setCompleted] = useState(todo.completed);
  const isInitialRender = useRef(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    dispatch(patchTodoAction(todo.id, { completed: isCompleted }));
  }, [isCompleted]);

  const deleteTodoHandler = (e) => {
    dispatch(removeTodoAction(todo.id));
    e.stopPropagation();
  };

  const editTodoHandler = (e) => {
    setEditModalOppened(true);
    e.stopPropagation();
  };

  return (
    <>
      <li
        className={classes["item-container"]}
        onClick={() => setModalOppened(true)}
      >
        <RoundCheckBox
          value={isCompleted}
          onChange={() => setCompleted((prev) => !prev)}
        />
        <h2>{todo.title}</h2>
        <div className={classes.actions}>
          <button onClick={deleteTodoHandler}>delete</button>
          <button onClick={editTodoHandler}>edit</button>
        </div>
      </li>
      {isModalOppened &&
        createPortal(
          <TodoModal todo={todo} onClose={() => setModalOppened(false)} />,
          document.getElementById("modal")
        )}
      {isEditModalOppened &&
        createPortal(
          <EditTodoModal
            todo={todo}
            onClose={() => setEditModalOppened(false)}
          />,
          document.getElementById("modal")
        )}
    </>
  );
};

export default TodoListItem;
