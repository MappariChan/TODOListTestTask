import { useDispatch } from "react-redux";
import { useState } from "react";

import { addTodoAction, userId } from "../../store/slices/todoSlice";

import Backdrop from "../../UI/Backdrop";

import classes from "./AddTodoModal.module.css";

const AddTodoModal = ({ onClose }) => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = () => {
    dispatch(addTodoAction({ userId, title, completed: false }));
    onClose();
  };

  return (
    <>
      <form className={classes.modal}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <button onClick={addTodoHandler}>Add TODO</button>
      </form>
      <Backdrop onClose={onClose} />
    </>
  );
};

export default AddTodoModal;
