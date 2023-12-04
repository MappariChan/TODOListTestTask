import { useDispatch } from "react-redux";
import { useState } from "react";

import { patchTodoAction } from "../../store/slices/todoSlice";

import Backdrop from "../../UI/Backdrop";

import classes from "./EditTodoModal.module.css";

const EditTodoModal = ({ onClose, todo }) => {
  const [title, setTitle] = useState(todo.title);

  const dispatch = useDispatch();

  const editTodoHandler = () => {
    dispatch(patchTodoAction(todo.id, { title }));
    onClose();
  };

  return (
    <>
      <form className={classes.modal}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <button onClick={editTodoHandler}>Edit TODO</button>
      </form>
      <Backdrop onClose={onClose} />
    </>
  );
};

export default EditTodoModal;
